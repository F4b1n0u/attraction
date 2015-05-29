// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.owner === userId;
}

isParticpating = function(userId, project) {
	return project.participants.some(function(participant) {
		return participant._id === userId;
	});
}