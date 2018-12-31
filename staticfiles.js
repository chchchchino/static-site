'use strict'

const path = require('path')
const StaticFileHandler = require('serverless-aws-static-file-handler')

module.exports.staticfile = (event, context, callback) => {
    // clientFilesPath is a local directory that serverless will automatically package and deploy to AWS Lambda along with your code
    console.log(event)
    const clientFilesPath = path.join(__dirname, './gc/')
    return new StaticFileHandler(clientFilesPath).get(event, context)
  }

  module.exports.binary = async (event, context) => {
    //event.path = "png.png"
    const clientFilesPath = path.join(__dirname, './gc/')
    return new StaticFileHandler(clientFilesPath).get(event, context)
  }