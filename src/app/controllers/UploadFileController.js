const uploadFileController = {

 storeFile: (request,response) => {

    //console.log(request.file);
    const { filename} = request.file

    response.json({arquivo: filename})
    }

}

module.exports = uploadFileController;