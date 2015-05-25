// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.owner._id === userId;
}