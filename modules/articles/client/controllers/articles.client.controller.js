'use strict';

//noinspection JSAnnotator
angular.module('articles').controller('ConferenceCreateController', ['$scope', '$sce', '$stateParams', '$location', 'Authentication', 'Conferences', 'Upload', '$timeout',
    function ($scope, $sce, $stateParams, $location, Authentication, Conferences, Upload, $timeout) {
        $scope.authentication = Authentication;

        $scope.removeFile = function () {
            $scope.uploadedFile = null
            $scope.conference.files = [];
        }

        $scope.uploadFiles = function (file, errFiles) {
            console.log(file, errFiles)
            $scope.uploadedFile = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: '/api/uploads',
                    data: {uploadedFile: file}
                });

                file.upload.then(function (response) {
                    console.log('File is successfully uploaded to ' + response.data.uploadedURL);

                    var newfile = {
                        filename: $scope.uploadedFile.name,
                        url: response.data.uploadedURL
                    }

                    if (!$scope.conference.files) {
                        $scope.conference.files = []
                    }

                    $scope.conference.files.push(newfile);

                    $timeout(function () {
                        file.result = response.data;
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
        };

        $scope.conference = new Conferences({});

        $scope.create = function () {
            $scope.conference.$save(function (response) {
                // $scope.conference = new Conferences({});
                $location.path('conferences/' + response._id);
            });
            console.log($scope.conference)
        };

    }
]);


//noinspection JSAnnotator
angular.module('articles').controller('ConferenceViewController', [
    '$scope', '$sce', '$stateParams', '$location', 'Authentication', 'Conferences', 'Upload', '$timeout',
            'SessionConference',
            function ($scope, $sce, $stateParams, $location, Authentication, Conferences, Upload, $timeout, SessionConference) {
                $scope.authentication = Authentication;



        $scope.conference = {};
        function init() {
            $scope.conferences = Conferences.get({
                conferenceId: $stateParams.conferenceId
            }, function (r) {
                $scope.conference = r;
            });
        }

        init();

        $scope.removeFile = function () {
            $scope.uploadedFile = null;
            $scope.conference.topic_one.files = [];
        };

        $scope.uploadFiles_1 = function (file, errFiles) {
            console.log(file, errFiles);
            $scope.uploadedFile = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: '/api/uploads',
                    data: {uploadedFile: file}
                });

                file.upload.then(function (response) {
                    console.log('File is successfully uploaded to ' + response.data.uploadedURL);
                    var newfile = {
                        filename: $scope.uploadedFile.name,
                        url: response.data.uploadedURL
                    };

                    if (!$scope.conference.topic_one.files) {
                        $scope.conference.topic_one.files = []
                    }

                    $scope.conference.topic_one.files.push(newfile);


                    $timeout(function () {
                        file.result = response.data;
                        $scope.update();
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
        };
        $scope.removeUploadFiles_1 = function (conference, topic_one, files, index) {
            conference.topic_one.files.splice(index, 1);
            $scope.update();
        };

        $scope.uploadFiles_2 = function (file, errFiles) {
            console.log(file, errFiles);
            $scope.uploadedFile = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: '/api/uploads',
                    data: {uploadedFile: file}
                });

                file.upload.then(function (response) {
                    console.log('File is successfully uploaded to ' + response.data.uploadedURL);
                    var newfile = {
                        filename: $scope.uploadedFile.name,
                        url: response.data.uploadedURL
                    };

                    if (!$scope.conference.topic_two.files) {
                        $scope.conference.topic_two.files = []
                    }


                    $scope.conference.topic_two.files.push(newfile);

                    $timeout(function () {
                        file.result = response.data;
                        $scope.update();
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
        };
        $scope.removeUploadFiles_2 = function (conference, topic_two, files, index) {
            conference.topic_two.files.splice(index, 1);
            $scope.update();
        };

        $scope.uploadFiles_3 = function (file, errFiles) {
            console.log(file, errFiles);
            $scope.uploaddFile = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: '/api/uploads',
                    data: {uploadedFile: file}
                });

                file.upload.then(function (response) {
                    console.log('File is successfully uploaded to ' + response.data.uploadedURL);
                    var newfile = {
                        filename: $scope.uploadedFile.name,
                        url: response.data.uploadedURL
                    };

                    if (!$scope.conference.topic_three.files) {
                        $scope.conference.topic_three.files = []
                    }


                    $scope.conference.topic_three.files.push(newfile);

                    $timeout(function () {
                        file.result = response.data;
                        $scope.update();
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
        };
        $scope.removeUploadFiles_3 = function (conference, topic_three, files, index) {
            conference.topic_three.files.splice(index, 1);
            $scope.update();
        };

        $scope.uploadFiles_4 = function (file, errFiles) {
            console.log(file, errFiles);
            $scope.uploadedFile = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: '/api/uploads',
                    data: {uploadedFile: file}
                });

                file.upload.then(function (response) {
                    console.log('File is successfully uploaded to ' + response.data.uploadedURL);
                    var newfile = {
                        filename: $scope.uploadedFile.name,
                        url: response.data.uploadedURL
                    };

                    if (!$scope.conference.topic_four.files) {
                        $scope.conference.topic_four.files = []
                    }


                    $scope.conference.topic_four.files.push(newfile);

                    $timeout(function () {
                        file.result = response.data;
                        $scope.update();
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
        };
        $scope.removeUploadFiles_4 = function (conference, topic_four, files, index) {
            conference.topic_four.files.splice(index, 1);
            $scope.update();
        };

        $scope.uploadFiles_5 = function (file, errFiles) {
            console.log(file, errFiles);
            $scope.uploadedFile = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: '/api/uploads',
                    data: {uploadedFile: file}
                });

                file.upload.then(function (response) {
                    console.log('File is successfully uploaded to ' + response.data.uploadedURL);
                    var newfile = {
                        filename: $scope.uploadedFile.name,
                        url: response.data.uploadedURL
                    };

                    if (!$scope.conference.topic_five.files) {
                        $scope.conference.topic_five.files = []
                    }


                    $scope.conference.topic_five.files.push(newfile);

                    $timeout(function () {
                        file.result = response.data;
                        $scope.update();
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
        };
        $scope.removeUploadFiles_5 = function (conference, topic_five, files, index) {
            conference.topic_five.files.splice(index, 1);
            $scope.update();
        };


        // Remove existing Article
        $scope.remove = function (conference) {
            if (conference) {
                conference.$remove();

                for (var i in $scope.conferences) {
                    if ($scope.conferences[i] === conference) {
                        $scope.conferences.splice(i, 1);
                    }
                }
            } else {
                $scope.conference.$remove(function () {
                    $location.path('/articles/list_article');
                });
            }
        };

        $scope.update = function () {
            $scope.conference.$update(function () {

            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.newContent = {};
        $scope.addSubContent = function (topic, content) {

            topic.contents.push(content);
            $scope.newContent = {};
            content.isEditMode = true;
        };

        $scope.removeContent = function (topic, content, index) {
            topic.contents.splice(index, 1);
            $scope.update();
        };

        $scope.removeSubDetailContent = function (content, subContent, index) {
            content.subContents.splice(index, 1);
            $scope.update();
        };

        $scope.addSubDetailContent = function (topic, content, index) {
            content.subContents.push({
                header: '',
                content: '',
                isEditMode: true
            });
        };
        $scope.toggleEditContent = function (topic, content, index) {
            if (content.isEditMode) {
                content.isEditMode = !content.isEditMode;
                $scope.update();
            } else {
                content.isEditMode = true;
            }
        };
        $scope.toggleEditDetailContent = function (topic, subContent, index) {
            if (subContent.isEditMode) {
                subContent.isEditMode = !subContent.isEditMode;
                $scope.update();
            } else {
                subContent.isEditMode = true;
            }
        };
        $scope.toggleDeleteposition = function (topic, user, index) {
            if (user.isEditMode) {
                user.isEditMode = !user.isEditMode;
                $scope.removeSubUser();
            } else {
                user.isEditMode = true;

            }
        };

        $scope.newUser = {};
        $scope.addSubUser = function (users, user) {
            users.push(user);
            $scope.newUser = {};
        };

        $scope.removeSubUser = function (users, user, index) {
            users.splice(index, 1);
            $scope.update();
        };

        // create session
        $scope.createsession = function () {

            $scope.sessionConference = new SessionConference({
                status: true,
                conference: $scope.conference,
                topic: 1,
                current_content: $scope.conference.topic_one.contents[0]
            });

            $scope.sessionConference.$save(function (response) {
                console.log(response);
                $location.path('sessions/' + response._id);
            });
        };

    }
]);

//noinspection JSAnnotator
angular.module('articles').controller('ConferenceListController', ['$scope', 'SessionConference', '$sce', '$stateParams', '$location', 'Authentication', 'Conferences', 'Upload', '$timeout',
    function ($scope, SessionConference, $sce, $stateParams, $location, Authentication, Conferences, Upload, $timeout) {
        $scope.authentication = Authentication;


        $scope.conferences = [];
        function init() {
            $scope.conferences = Conferences.query();
        }

        init();

    }
]);

// ng-show="authentication.user._id == sessionConference.user._id"

//noinspection JSAnnotator
angular.module('articles').controller('SessionAdminController', [
    '$scope', '$sce', '$stateParams', '$location', 'Authentication', 'Socket', 'Conferences', 'Upload', '$timeout',
    'SessionConference',
    function ($scope, $sce, $stateParams, $location, Authentication, Socket, Conferences, Upload, $timeout, SessionConference) {
        $scope.authentication = Authentication;



        $scope.sessionConference = {};
        function init() {
            $scope.sessionConferences = SessionConference.get({
                sessionId: $stateParams.sessionId
            }, function (r) {
                $scope.sessionConference = r;
            });
        }

        init();

        $scope.remove = function (sessionConference) {
            if (sessionConference) {
                sessionConference.$remove();

                for (var i in $scope.sessionConferences) {
                    if ($scope.sessionConferences[i] === sessionConference) {
                        $scope.sessionConferences.splice(i, 1);
                    }
                }
            } else {
                $scope.sessionConference.$remove(function () {
                    $location.path('/articles/list_article');
                });
            }
        };

        $scope.update = function () {
            $scope.sessionConference.$update(function () {

            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };


        $scope.newContent = {};
        $scope.addSubContent = function (topic, content) {

            topic.contents.push(content);
            $scope.newContent = {};
            content.isEditMode = true;
        };

        $scope.removeContent = function (topic, content, index) {
            topic.contents.splice(index, 1);
            $scope.update();
        };

        $scope.removeSubDetailContent = function (content, subContent, index) {
            content.subContents.splice(index, 1);
            $scope.update();
        };

        $scope.addSubDetailContent = function (topic, content, index) {
            content.subContents.push({
                header: '',
                content: '',
                isEditMode: true
            });
        };
        $scope.toggleEditContent = function (topic, content, index) {
            if (content.isEditMode) {
                content.isEditMode = !content.isEditMode;
                $scope.update();
            } else {
                content.isEditMode = true;
            }
        };
        $scope.toggleEditDetailContent = function (topic, subContent, index) {
            if (subContent.isEditMode) {
                subContent.isEditMode = !subContent.isEditMode;
                $scope.update();
            } else {
                subContent.isEditMode = true;
            }
        };
        $scope.toggleDeleteposition = function (topic, user, index) {
            if (user.isEditMode) {
                user.isEditMode = !user.isEditMode;
                $scope.removeSubUser();
            } else {
                user.isEditMode = true;

            }
        };


        $scope.uploadFiles_1 = function (file, errFiles) {
            console.log(file, errFiles);
            $scope.uploadedFile = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: '/api/uploads',
                    data: {uploadedFile: file}
                });

                file.upload.then(function (response) {
                    console.log('File is successfully uploaded to ' + response.data.uploadedURL);
                    var newfile = {
                        filename: $scope.uploadedFile.name,
                        url: response.data.uploadedURL
                    };

                    if (!$scope.sessionConference.conference.topic_one.files) {
                        $scope.sessionConference.conference.topic_one.files = []
                    }

                    $scope.sessionConference.conference.topic_one.files.push(newfile);


                    $timeout(function () {
                        file.result = response.data;
                        $scope.update();
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
        };
        $scope.removeUploadFiles_1 = function (conference, topic_one, files, index) {
            conference.topic_one.files.splice(index, 1);
            $scope.update();
        };

        $scope.uploadFiles_2 = function (file, errFiles) {
            console.log(file, errFiles);
            $scope.uploadedFile = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: '/api/uploads',
                    data: {uploadedFile: file}
                });

                file.upload.then(function (response) {
                    console.log('File is successfully uploaded to ' + response.data.uploadedURL);
                    var newfile = {
                        filename: $scope.uploadedFile.name,
                        url: response.data.uploadedURL
                    };

                    if (!$scope.conference.topic_two.files) {
                        $scope.conference.topic_two.files = []
                    }


                    $scope.conference.topic_two.files.push(newfile);

                    $timeout(function () {
                        file.result = response.data;
                        $scope.update();
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
        };
        $scope.removeUploadFiles_2 = function (conference, topic_two, files, index) {
            conference.topic_two.files.splice(index, 1);
            $scope.update();
        };

        $scope.uploadFiles_3 = function (file, errFiles) {
            console.log(file, errFiles);
            $scope.uploaddFile = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: '/api/uploads',
                    data: {uploadedFile: file}
                });

                file.upload.then(function (response) {
                    console.log('File is successfully uploaded to ' + response.data.uploadedURL);
                    var newfile = {
                        filename: $scope.uploadedFile.name,
                        url: response.data.uploadedURL
                    };

                    if (!$scope.conference.topic_three.files) {
                        $scope.conference.topic_three.files = []
                    }


                    $scope.conference.topic_three.files.push(newfile);

                    $timeout(function () {
                        file.result = response.data;
                        $scope.update();
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
        };
        $scope.removeUploadFiles_3 = function (conference, topic_three, files, index) {
            conference.topic_three.files.splice(index, 1);
            $scope.update();
        };

        $scope.uploadFiles_4 = function (file, errFiles) {
            console.log(file, errFiles);
            $scope.uploadedFile = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: '/api/uploads',
                    data: {uploadedFile: file}
                });

                file.upload.then(function (response) {
                    console.log('File is successfully uploaded to ' + response.data.uploadedURL);
                    var newfile = {
                        filename: $scope.uploadedFile.name,
                        url: response.data.uploadedURL
                    };

                    if (!$scope.conference.topic_four.files) {
                        $scope.conference.topic_four.files = []
                    }


                    $scope.conference.topic_four.files.push(newfile);

                    $timeout(function () {
                        file.result = response.data;
                        $scope.update();
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
        };
        $scope.removeUploadFiles_4 = function (conference, topic_four, files, index) {
            conference.topic_four.files.splice(index, 1);
            $scope.update();
        };

        $scope.uploadFiles_5 = function (file, errFiles) {
            console.log(file, errFiles);
            $scope.uploadedFile = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: '/api/uploads',
                    data: {uploadedFile: file}
                });

                file.upload.then(function (response) {
                    console.log('File is successfully uploaded to ' + response.data.uploadedURL);
                    var newfile = {
                        filename: $scope.uploadedFile.name,
                        url: response.data.uploadedURL
                    };

                    if (!$scope.conference.topic_five.files) {
                        $scope.conference.topic_five.files = []
                    }


                    $scope.conference.topic_five.files.push(newfile);

                    $timeout(function () {
                        file.result = response.data;
                        $scope.update();
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                        evt.loaded / evt.total));
                });
            }
        };
        $scope.removeUploadFiles_5 = function (conference, topic_five, files, index) {
            conference.topic_five.files.splice(index, 1);
            $scope.update();
        };

    }
]);
