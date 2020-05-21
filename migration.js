var models = {
  "Chapter": {
    "collection": "chapters",
    "files": {}
  },
  "City": {
    "collection": "cities",
    "files": {}
  },
  "Classe": {
    "collection": "classes",
    "files": {}
  },
  "Course": {
    "collection": "courses",
    "files": {
      "icon": "single"
    }
  },
  "Grade": {
    "collection": "grades",
    "files": {}
  },
  "Kompetensidasar": {
    "collection": "kompetensidasars",
    "files": {}
  },
  "Kurikulum": {
    "collection": "curriculums",
    "files": {}
  },
  "Province": {
    "collection": "provinces",
    "files": {}
  },
  "Question": {
    "collection": "questions",
    "files": {
      "questionImage": "single",
      "questionAudio": "single",
      "questionVideo": "single",
      "imageExplanation": "single",
      "pdfExplanation": "single",
      "videoExplanation": "single"
    }
  },
  "Questionsource": {
    "collection": "questionsources",
    "files": {}
  },
  "Quiz": {
    "collection": "quizzes",
    "files": {}
  },
  "School": {
    "collection": "schools",
    "files": {}
  },
  "Student": {
    "collection": "students",
    "files": {}
  },
  "Teacher": {
    "collection": "teachers",
    "files": {}
  },
  "Userquiz": {
    "collection": "userquizs",
    "files": {}
  },
  "UploadFile": {
    "collection": "upload_file",
    "files": {}
  },
  "UsersPermissionsPermission": {
    "collection": "users-permissions_permission",
    "files": {}
  },
  "UsersPermissionsRole": {
    "collection": "users-permissions_role",
    "files": {}
  },
  "UsersPermissionsUser": {
    "collection": "users-permissions_user",
    "files": {}
  },
  "ComponentSubchapterSubChapter": {
    "collection": "components_subchapter_sub_chapters",
    "files": {}
  },
  "ComponentUserAnswer": {
    "collection": "components_user_answers",
    "files": {}
  },
  "ComponentUserQuestion": {
    "collection": "components_user_questions",
    "files": {}
  },
  "ComponentWorkflowData": {
    "collection": "components_workflows",
    "files": {}
  }
};

for (var i in models) {
  var model = models[i];
  var update = {};
  var keyCount = 0;

  for (var key in model.files) {
    keyCount += 1;
    update[key] = '';
  }

  if (keyCount > 0) {
    db.getCollection(model.collection).update({}, {
      $unset: update
    }, {
      multi: true
    });
  }
}

var fileCursor = db.getCollection('upload_file').find({});

while (fileCursor.hasNext()) {
  var el = fileCursor.next();
  el.related.forEach(function (fileRef) {
    var model = models[fileRef.kind];

    if (!model) {
      return;
    }

    var fieldType = model.files && model.files[fileRef.field];

    // stop if the file points to a field the user didn't specify
    if (!fieldType) {
      return;
    }

    if (fieldType === 'single') {
      db.getCollection(model.collection).updateOne({
        _id: fileRef.ref
      }, {
        $set: {
          [fileRef.field]: el._id
        }
      });
    } else if (fieldType === 'multiple') {
      db.getCollection(model.collection).updateOne({
        _id: fileRef.ref
      }, {
        $push: {
          [fileRef.field]: el._id
        }
      });
    }
  });
}
