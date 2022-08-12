#STEP 1/9: FROM quay.io/fedora/nodejs-16@sha256:fda3c671877b9d47edd0067f156182ef7e85a568a2f8ae2566c6f4305bbe36ad
#STEP 2/9: LABEL "io.openshift.build.image"="quay.io/fedora/nodejs-16@sha256:fda3c671877b9d47edd0067f156182ef7e85a568a2f8ae2566c6f4305bbe36ad" "io.openshift.build.commit.author"="Gideon Pinto <gideonpinto123@gmail.com>" "io.openshift.build.commit.date"="Thu Aug 4 15:55:02 2022 -0400" "io.openshift.build.commit.id"="2f4cd33eddbfff22ee88c3511089fe581f9b8a02" "io.openshift.build.commit.ref"="master" "io.openshift.build.commit.message"="Merge pull request #573 from PintoGideon/Use-Cookies" "io.openshift.build.source-location"="https://github.com/FNNDSC/ChRIS_ui.git"
#STEP 3/9: ENV OPENSHIFT_BUILD_NAME="chrisui-1" OPENSHIFT_BUILD_NAMESPACE="chris-manual" OPENSHIFT_BUILD_SOURCE="https://github.com/FNNDSC/ChRIS_ui.git" OPENSHIFT_BUILD_COMMIT="2f4cd33eddbfff22ee88c3511089fe581f9b8a02"
#STEP 4/9: USER root
#STEP 5/9: COPY upload/src /tmp/src
#STEP 6/9: RUN chown -R 1001:0 /tmp/src
#STEP 7/9: USER 1001
#STEP 8/9: RUN /usr/libexec/s2i/assemble

FROM quay.io/fedora/nodejs-16 as builder

USER root

COPY upload/src /tmp/src

RUN chown -R 1001:0 /tmp/src

USER 1001

RUN /usr/libexec/s2i/assemble


FROM quay.io/fedora/nodejs-16

RUN yarn global add sirv-cli

WORKDIR /app

COPY --from=builder /app/build /app
COPY ./docker-entrypoint.sh /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
ENV HOST=0.0.0.0 PORT=3000
CMD ["sirv", "--quiet", "--etag", "--single"]
EXPOSE 3000
