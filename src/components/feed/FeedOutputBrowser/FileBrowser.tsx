import React from "react";
import classNames from "classnames";
import FileDetailView from "../../explorer/FileDetailView";
import {
  Breadcrumb,
  BreadcrumbItem,
  Grid,
  GridItem,
  Button,
} from "@patternfly/react-core";
import {
  DownloadIcon,
  FileImageIcon,
  FileCodeIcon,
  FileAltIcon,
  FileIcon,
  FolderCloseIcon,
} from "@patternfly/react-icons";
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant,
} from "@patternfly/react-table";
import FileViewerModel from "../../../api/models/file-viewer.model";
import { FileBrowserProps, FileBrowserState, TreeNode } from "./types";

function getInitialState(root: TreeNode) {
  return {
    directory: root,
    breadcrumbs: [root],
    previewingFile: undefined,
  };
}

const FileBrowser = (props: FileBrowserProps) => {
  const {
    root,
    selectedFiles,
    downloadAllClick,
    handleFileBrowserToggle,
    handleFileViewerToggle,
  } = props;
  const [
    fileBrowserState,
    setfileBrowserState,
  ] = React.useState<FileBrowserState>(getInitialState(root));
  const { breadcrumbs, directory, previewingFile } = fileBrowserState;

  const handleBreadcrumbClick = (
    e: React.MouseEvent,
    folder: TreeNode,
    prevBreadcrumbs: TreeNode[]
  ) => {
    e.preventDefault();

    setfileBrowserState({
      ...fileBrowserState,
      directory: folder,
      breadcrumbs: [...prevBreadcrumbs, folder],
    });
  };

  const handleFileClick = (e: React.MouseEvent, rows: any[], rowData: any) => {
    const target = e.nativeEvent.target as HTMLElement;
    if (e.button !== 0 || target.closest(".download-file")) {
      return;
    }

    const rowIndex = rowData.rowIndex;
    if (!directory.children) {
      return;
    }

    const file = directory.children[rowIndex];
    console.log("File", file);

    if (file && file.children.length > 0) {
      setfileBrowserState({
        ...fileBrowserState,
        directory: file,
        breadcrumbs: [...breadcrumbs, file],
      });
    } else {
      setfileBrowserState({
        ...fileBrowserState,
        previewingFile: file,
      });
    }
  };

  const handleDownloadClick = async (e: React.MouseEvent, node: TreeNode) => {
    e.stopPropagation();
    const blob = await node.file.getFileBlob();
  };

  const generateBreadcrumb = (
    folder: TreeNode,
    i: number,
    breadcrumbs: TreeNode[]
  ) => {
    const prevBreadcrumbs = breadcrumbs.slice(0, i);
    const onClick = (e: React.MouseEvent) =>
      handleBreadcrumbClick(e, folder, prevBreadcrumbs);
    return (
      <BreadcrumbItem onClick={onClick} key={i}>
        {folder.title}
      </BreadcrumbItem>
    );
  };

  const generateTableRow = (node: TreeNode) => {
    let type = "UNKNOWN FORMAT";
    if (node.children.length > 0) {
      type = "dir";
    } else {
      const name = node.title;
      if (name.indexOf(".") > -1) {
        type = name.split(".").splice(-1)[0].toUpperCase();
      }
    }
    const icon = getIcon(type);
    const isPreviewing =
      !!previewingFile && previewingFile.title === node.title;
    const fileName = (
      <div
        className={classNames(
          "file-browser__table--fileName",
          isPreviewing && "file-browser__table--isPreviewing"
        )}
      >
        {icon}
        {node.title}
      </div>
    );
    const name = {
      title: fileName,
    };

    const download = {
      title: node.children ? (
        ""
      ) : (
        <DownloadIcon
          className="download-file-icon"
          onClick={(e) => handleDownloadClick(e, node)}
        />
      ),
    };

    return {
      cells: [name, type, download],
    };
  };

  const cols = ["Name", "Type", ""];
  const rows = directory.children.map(generateTableRow);

  if (!directory.children || !directory.children.length) {
    return <div>No Files in this directory.</div>;
  }

  return (
    <Grid hasGutter className="file-browser">
      <GridItem
        xl2={4}
        xl2RowSpan={12}
        xl={4}
        xlRowSpan={12}
        lg={4}
        lgRowSpan={12}
        md={4}
        mdRowSpan={12}
        sm={12}
        smRowSpan={12}
        className="file-browser__firstGrid"
      >
        <div className="file-browser__header">
          <Breadcrumb>{breadcrumbs.map(generateBreadcrumb)}</Breadcrumb>
          <div className="file-browser__header__info">
            <span className="files-browser__header--fileCount">
              {selectedFiles
                ? `(${selectedFiles.length} files)`
                : "Empty Directory"}
            </span>
            <Button
              className="file-browser__header--downloadButton"
              onClick={() => downloadAllClick()}
              variant="secondary"
            >
              Download All
            </Button>
          </div>
        </div>

        <Table
          className="file-browser__table"
          aria-label="file-browser"
          variant={TableVariant.compact}
          cells={cols}
          rows={rows}
        >
          <TableHeader />
          <TableBody onRowClick={handleFileClick} />
        </Table>
      </GridItem>

      <GridItem
        xl2={8}
        xl2RowSpan={12}
        xl={8}
        xlRowSpan={12}
        lg={8}
        lgRowSpan={12}
        md={8}
        mdRowSpan={12}
        sm={12}
        smRowSpan={12}
        className="file-browser__grid2"
      >
        {previewingFile && (
          <FileDetailView
            fullScreenMode={true}
            selectedFile={previewingFile.file}
            toggleFileBrowser={() => {
              handleFileBrowserToggle(previewingFile, directory);
            }}
            toggleFileViewer={() => {
              handleFileViewerToggle(previewingFile, directory);
            }}
          />
        )}
      </GridItem>
    </Grid>
  );
};

export default FileBrowser;

/**
 *
 * @param type string
 * @returns JSX Element
 */

const getIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "dir":
      return <FolderCloseIcon />;
    case "dcm":
    case "jpg":
    case "png":
      return <FileImageIcon />;
    case "html":
    case "json":
      return <FileCodeIcon />;
    case "txt":
      return <FileAltIcon />;
    default:
      return <FileIcon />;
  }
};
