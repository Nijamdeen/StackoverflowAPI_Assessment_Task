StackOverflow.namespace("UI.Question");
StackOverflow.UI.Question = (function () {
    "use strict";
    //Get Question From Controller
    function RefreshQuestionsList() {
        $("#Refresh").on("click", function () {
            GetQuestions();
        })
    }
    function GetSampleData() {
        $("#panel").on("click", "#viewpopup", function () {
            var url = "../Question/GetData";
            var data = {};
            
            MakeAjaxCall("GET", url, data, false, function (responce) {
                if (responce) {
                    var html = "";
                    $(responce.list).each(function (index, item) {
                        
                            var template = '<tr><td>'+item.SampleID+'</td><td>'+item.SampleName+'</td><td>'+item.SampleDescription+'</td></tr>';
                            html += template;

                    })
                    $("#tbody").html(html);
                    $('#myModal').modal('show');
                }
            }, function (responce) {
                
                alert('There is some error while Searching data.');
            });
        })
    }
    function GetQuestions() {
        var url = "https://api.stackexchange.com/2.2/questions?page=1&pagesize=50&order=desc&sort=activity&site=stackoverflow";
        var data = {};
        MakeAjaxCall("GET", url, data, false, function (responce) {
            if (responce) {
                var html = "";
                $(responce.items).each(function (index, item) {
                    if (item) {

                        var date = new Date(1000 * item.creation_date);
                        date = moment(date).format("YYYY MMM DD")
                        var template = '<div class="card"><div class="card-block"><h4 class="card-title" id="name">' + item.owner.display_name + '</h4><h6 class="card-subtitle mb-2 text-muted" id="date">' + date + '</h6><p class="card-text" id="title">' + item.title + '</p><a title="View" target="_blank" href="' + item.link + '" class="card-link" id="view">View</a>   <a href="javascript:void(0)" title="Another Link" class="card-link" id="viewpopup">Another link</a></div></div>';
                        html += template;

                        //`<a href="#" class="list-group-item list-group-item-action flex-column align-items-start"> <div class="d-flex w-100 justify-content-between"><small class ="mb-1"><a href='` + item.link + `'> view  </a></small><small class ="text-muted">` + item.creation_date + `</small></div><p class="mb-1">` + item.title + `</p><small class="text-muted">` + item.owner.display_name + `</small></a>`
                    }
                })
                $("#data-rows").html(html);
            }
        }, function (responce) {
            alert('There is some error while Searching data.');
        });
        
    }
    GetQuestions();
    return {
        RefreshQuestionsList: function () {
            RefreshQuestionsList();
        },
        GetSampleData:function()
        {
            GetSampleData();
        }
    }
}());