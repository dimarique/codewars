function getProductId(url) {
  const splittedUrl = url.split('-');
  return splittedUrl[splittedUrl.length - 2]
}