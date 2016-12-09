class ContainerHttpProperties {
    constructor(etag, lastModified) {
        // Standard HTTP-Properties
        // See https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-and-retrieving-properties-and-metadata-for-blob-resources
        this.ETag = etag || 1;
        this.lastModified = lastModified || new Date().toGMTString();
    }
}

module.exports = ContainerHttpProperties;