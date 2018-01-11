//TimeSheet.namespace("UI.Global");

//var pathtext = "";

//        setPathVarible: function () {
//            var newpath = $("#URLEndpointName").val().split("/");

//            if (newpath[1] == '')
//                pathtext = "";
//            else
//                pathtext = "/" + newpath[1];
//        },


//TimeSheet.UI.Global = (function () {
//    "use strict";


//    function SuccessMessage(message) {
//        $("#errorDiv").html('<div class="alert alert-success FadeOut" style="display:block;">' + message + '</div>');
//        $('html, body').animate({
//            scrollTop: $("#errorDiv").offset().top - 140
//        }, 2000);
//    }

//    function ErrorMessage(message) {
//        $("#errorDiv").html('<div class="alert alert-danger" style="display:block;">' + message + '</div>');
//        $('html, body').animate({
//            scrollTop: $("#errorDiv").offset().top - 140
//        }, 2000);
//    }

//    function WarningMessage(message) {
//        $("#errorDiv").html('<div class="alert alert-warning" style="display:block;">' + message + '</div>');
//        $('html, body').animate({
//            scrollTop: $("#errorDiv").offset().top - 140
//        }, 2000);
//    }

//    function SetChoosenToolTipText(elemId) {
//        $('#' + elemId + '_chosen').hover(function () {
//            $('#' + elemId + '_chosen').prop('title', $('#' + elemId + '_chosen').find('span').text());
//        });
//        $('#' + elemId + '_chosen' + ' .chosen-drop .chosen-results').on('mouseenter', 'li', function () { $(this).prop('title', $(this).text()) });
//    }

//    return {



//        ApplyAutoCompleteFeature: function () {
//            $(".chosen-select").chosen({
//                no_results_text: "Nothing Found!",
//                placeholder_text_single: "No Option",
//                placeholder_text_multiple: "No Option"

//            }).each(function (index, item) {
//                SetChoosenToolTipText(item.id);
//            });
//        },

//        ApplyAutoCompleteFeatureByElem: function (elementId) {
//            $("#" + elementId).chosen({
//                no_results_text: "Nothing Found!",
//                placeholder_text_single: "No Option",
//                placeholder_text_multiple: "No Option"
//            });
//            SetChoosenToolTipText(elementId);
//        },

//        applyCustomPaginationTheme: function () {
//            $('.pagination-alignment ul').removeClass();
//            var $span = $('.pagination-alignment li span');
//            $span.replaceWith(function () {
//                return $('<a>', {
//                    html: this.innerHTML
//                });
//            });
//            $('ul.pagination li a').removeClass();
//            $('.pagination-alignment ul li').removeClass();
//            $('.pagination-alignment ul').addClass('CustomPagination pagination pagination-sm');
//            $('.pagination-alignment ul li').first().addClass('active')
//            $('.pagination-alignment ul li a').first().text('').addClass('fa fa-angle-double-left');
//            $('.pagination-alignment ul li a').last().text('').addClass('fa fa-angle-double-right');
//        },

//        UpdateExpiryWorkStation: function (value) {


//            var orgValue = $("#ddlOrganization").val();

//            var data = { OrgId: orgValue, opt: value }
//            var url = pathtext + '/Alerts/UpdatedWorskationList';
//            var httpMethod = "GET";


//            MakeAjaxCall(httpMethod, url, data, true, function (result) {
//                $('#DivWorkstation').html(result);
//            }, function (xhr, ajaxOptions, thrownError) {
//                console.log('an error occurred in making ajax call');
//            });


//        },

//        setPathVarible: function () {
//            var newpath = $("#URLEndpointName").val().split("/");

//            if (newpath[1] == '')
//                pathtext = "";
//            else
//                pathtext = "/" + newpath[1];
//        },
        
//        ShowTagIdDiv: function (divId, btnId)
//        {
//            if ($('#' + btnId).hasClass('clicked')) {
//                $('.' + divId).addClass('hide');
//                $('#' + btnId).removeClass('clicked');
//                $('#' + btnId).val('Show All');
//            }
//            else {
//                $('#' + btnId).addClass('clicked');
//                $('.' + divId).removeClass('hide');
//                $('#' + btnId).val('Show Less');
//            }

//        },

//        LoadAJAXPagination: function (element, totalRows, ddlPageSize, hdnPageSize, cPage, pStart, pEnd, data, URL, sucessCallback, failureCallback) {

//            if (data === null) {
//                data = {};
//            }
//            var pSize, $hdnCPage = cPage, $hdnTotalRecords = totalRows;
//            cPage = cPage.val();
//            totalRows = totalRows.val();
//            var flagFirst = true, flagLast = false;
//            var i;
//            var totalPages;
//            pSize = ddlPageSize.val();

//            if (pSize === '' || pSize === undefined || !isNaN(pSize)) {
//                if (hdnPageSize.val() === '') {
//                    pSize = 10;
//                    hdnPageSize.val('10');
//                }
//                else {
//                    pSize = hdnPageSize.val();
//                }
//            }
//            if (!isNaN(hdnPageSize.val())) {

//                //console.log('hiddenpage size : ' + hdnPageSize.val());
//                if (hdnPageSize.val() > 0) {

//                    ddlPageSize.val(hdnPageSize.val());
//                } else {

//                    ddlPageSize.val(0);
//                }
//            }
//            //set hdnPageSize to current page size
//            hdnPageSize.val(pSize);
//            // register the onchange event of $(ddlPageSize)
//            ddlPageSize.change(function (e) {
//                if ($(this).val() == hdnPageSize.val()) {
//                    return false;
//                }
//                var currSelPSize = $(this).val();
//                if (isNaN(currSelPSize)) {
//                    currSelPSize = 0;
//                }
//                hdnPageSize.val(currSelPSize);
//                pSize = currSelPSize;
//                data.CPage = 1;
//                data.pSize = pSize;
//                MakeAjaxCall('POST', URL, data, true, function (result) {
//                    if (sucessCallback) {
//                        sucessCallback(result);
//                        if (pSize > 0)
//                            ddlPageSize.val(hdnPageSize.val());
//                        else
//                            ddlPageSize.val(0);
//                    }
//                }, function (xhr, ajaxOptions, thrownError) {
//                    if (failureCallback)
//                        failureCallback(xhr, ajaxOptions, thrownError);
//                }, false, false);

//            });
//            if (totalRows / pSize < 1) {
//                totalPages = 1;
//            }
//            else if (totalRows % pSize > 0) {
//                totalPages = parseInt(totalRows / pSize) + 1;
//            }
//            else
//                totalPages = parseInt(totalRows / pSize);

//            if (pStart === undefined || pStart == '') {
//                pStart = 1;
//            }

//            if (pEnd === undefined || pEnd == '') {
//                if (totalPages > 3)
//                    pEnd = 3;
//                else
//                    pEnd = totalPages;
//            }

//            if (cPage == undefined || cPage == '') {
//                cPage = 1;
//            }
//            if (totalPages == 1) {
//                pStart = 1;
//                pEnd = 1;
//            }

//            else if (cPage == totalPages && cPage > 2) {
//                pStart = totalPages - 2;
//                pEnd = totalPages;
//            }
//            else if (cPage == pEnd) {
//                if (cPage > 2) {
//                    pStart = parseInt(cPage) - 1;
//                    pEnd = parseInt(pEnd) + 1;
//                    if (pEnd > totalPages) {

//                        pEnd = totalPages;
//                    }
//                }
//            }
//            else if (cPage > pEnd) {
//                pStart = parseInt(cPage) - 1;
//                pEnd = parseInt(cPage) + 1;
//                if (pEnd > totalPages) {
//                    pEnd = totalPages;
//                }
//            }
//            if (cPage == pStart) {
//                if (cPage > 3) {
//                    pStart = cPage - 1;
//                    pEnd -= 1;
//                    if (pEnd > totalPages) {
//                        pEnd = totalPages;
//                    }
//                }
//            }
//            if (pEnd == totalPages) { flagLast = true; } else { flagLast = false; }
//            if (pStart == 1) { flagFirst = true; } else { flagFirst = false; }
//            var elementasId = element.replace('#', '');
//            var htmlToAdd = '<li class="pagewrap" id="spagel-left-li' + elementasId + '"><a data-target="left" data-prev="" data-original-title="First" data-placement="top" data-toggle="tooltip" id="spagel-left' + elementasId + '" class="pointer pagel page-link Next"> &#60;&#60; </a></li><li id="pagel-left-li' + elementasId + '"><a data-target="left" data-original-title="Previous" data-placement="top" data-toggle="tooltip" data-prev="" id="pagel-left' + elementasId + '" class="pointer pagel"> &#60; </a></li>';
//            var storeStart = pStart;
//            for (pStart; pStart < pEnd + 1; pStart++) {

//                htmlToAdd += '<li  class="pagewrap" id="pagel-el-' + pStart + elementasId + '"><a data-target="' + pStart + '" data-original-title="' + pStart + '" data-placement="top" data-toggle="tooltip"  class="pointer pagel pagel-el page-link Next">' + pStart + '</a></li>';
//            }
//            htmlToAdd += '<li  class="pagewrap" id="pagel-right-li' + elementasId + '"><a data-target="right" data-original-title="Next" data-placement="top" data-toggle="tooltip" data-next="" id="pagel-right' + elementasId + '" class="pointer pagel page-link Next">  &#62; </a></li><li id="spagel-right-li' + elementasId + '"><a data-target="right" data-original-title="Last" data-placement="top" data-toggle="tooltip" data-next="" id="spagel-right' + elementasId + '" class="pointer pagel">  &#62;&#62; </i></a></li>';

//            //   htmlToAdd += '<div class="well pull-right"> showing page(s): ' + parseInt(storeStart) + ' to  ' + pEnd + ' of ' + totalPages + '</div>';
//            if (pSize > 0)
//                $(element).html(htmlToAdd);

//            $('[data-toggle="tooltip"]').tooltip()
//            //attach events for pagination
//            if (flagFirst) {
//                if (cPage == 1) {

//                    $('#pagel-left-li' + elementasId).attr('disabled', 'true')
//                   .addClass('disabled');
//                    $('#spagel-left-li' + elementasId).attr('disabled', 'true')
//                  .addClass('disabled');
//                }
//            }
//            else {
//                if (cPage > 1) {
//                    $('#pagel-left-li' + elementasId).removeAttr('disabled')
//                        .removeClass('disabled');
//                    $('#spagel-left-li' + elementasId).removeAttr('disabled')
//                        .removeClass('disabled');
//                }

//            }
//            if (flagLast) {
//                if (cPage == totalPages) {
//                    $('#pagel-right-li' + elementasId).attr('disabled', 'true').addClass('disabled');
//                    $('#spagel-right-li' + elementasId).attr('disabled', 'true').addClass('disabled');
//                }

//            }
//            else {
//                if (cPage < totalPages) {
//                    $('#pagel-right-li' + elementasId).removeAttr('disabled').removeClass('disabled');
//                    $('#spagel-right-li' + elementasId).removeAttr('disabled').removeClass('disabled');
//                }
//            }

//            $('.pagel').each(function () {
//                var $this = $(this);
//                $this.unbind('click');
//                if (!$this.parent('li').hasClass('disabled')) {
//                    $this.click(function () {
//                        var p = parseInt($hdnCPage.val());
//                        if ($this.attr('id') == 'spagel-right' + elementasId) {
//                            //i.e. take it to last page

//                            p = totalPages;
//                            $hdnCPage.val(totalPages);
//                        }
//                        else if ($this.attr('id') == 'spagel-left' + elementasId) {
//                            // i.e. take it to first page
//                            p = 1;
//                            $hdnCPage.val(1);
//                        }
//                        else if ($this.data('target') > 0) {
//                            p = parseInt($this.data('target'));
//                            $hdnCPage.val($this.data('target'));
//                        }
//                        else {
//                            if ($this.data('target') == 'left') {
//                                p = p - 1;
//                            }
//                            else if ($this.data('target') == 'right') {
//                                if (p == 'undefined' || isNaN(p)) {
//                                    p = 2;
//                                } else {
//                                    p = p + 1;
//                                }
//                            }
//                        }
//                        if (p <= totalPages)
//                            $hdnCPage.val(p);
//                        if ($hdnCPage.val() <= totalPages && $hdnCPage.val() > 0) {
//                            // Make ajax call here
//                            data.CPage = $hdnCPage.val();
//                            data.TPage = totalPages;
//                            data.TRows = $hdnTotalRecords.val();
//                            data.pSize = pSize;

//                            MakeAjaxCall('POST', URL, data, true, function (result) {
//                                if (sucessCallback)
//                                    sucessCallback(result);
//                                if (pSize > 0)
//                                    ddlPageSize.val(hdnPageSize.val());
//                                else
//                                    ddlPageSize.val(0);

//                            }, function (xhr, ajaxOptions, thrownError) {
//                                if (failureCallback)
//                                    failureCallback(xhr, ajaxOptions, thrownError);
//                            }, false, false);
//                        }
//                    });
//                }
//            });
//            $('.pagel-el').each(function () {
//                if ($(this).closest('li').attr('id').indexOf(elementasId) > 0)
//                    $(this).closest('li').removeClass('active');
//            });
//            $('#pagel-el-' + cPage + elementasId).addClass('active');
//        },

//        OnDropdownMouseHover: function (ptr) {
//            showToolTip(ptr);

//        },

//        BindEvents: function () {
//            var showAlert = $("#show-lblEmailConfirmedAlert").val().toString();

//            if (showAlert == "True") {

//                $("#lblEmailConfirmedAlert").show();
//            }

//            $("#alert-close").on("click", null, function () {
//                var data = "{}";
//                var url = pathtext + "/KeepSessionAlive/SetSession";
//                var httpMethod = "POST";

//                MakeAjaxCall(httpMethod, url, data, false, function (result) {

//                    $("#lblEmailConfirmedAlert").hide();
//                    $("#show-lblEmailConfirmedAlert").val(false);
//                }, function (xhr, ajaxOptions, thrownError) {
//                    console.log('an error occurred in making ajax call');
//                });
//            });
//        },

//        PreventEnterKey: function () {
//            $("#term").keydown(function (event) {

//                if (event.keyCode == 13) {

//                    return false;
//                }
//            });
//        },

//        ValidateTextBox: function (dt, event) {
//            var ans = dt.val().trim();

//            if (ans) {
//                dt.css({
//                    "border": "",
//                    "background": ""
//                });
//                dt.attr('title', "");
//                dt.removeClass("blur");
//            } else {

//                dt.css({
//                    "border": "1px solid red",
//                    "background": "#FFCECE"
//                });
//                dt.attr('title', "Required field");
//                dt.addClass("blur");

//                $("html, body").animate({ scrollTop: 0 }, 500);
//                $("#msg").addClass("alert alert-danger");
//                $("#msg").text("Some validations failed. Please check highlighted boxes for details.");
//                $("#msg").show();

//                event.preventDefault();
//            }
//        },

//        ValidateDateTime: function (dt, event) {
//            var isValid = true;
//            var strval = dt.val();
//            var dateTime = strval.split(' ');
//            var date = dateTime[0];
//            var time = dateTime[1];
//            if ((VMI.UI.Global.IsValidateDateTime(time) && isValidDate(date)) && (new Date() > new Date(strval))) {
//                dt.css({
//                    "border": "",
//                    "background": ""
//                });
//                dt.attr('title', "");
//                dt.removeClass("blur");
//            } else {

//                dt.css({
//                    "border": "1px solid red",
//                    "background": "#FFCECE"
//                });
//                dt.attr('title', "Invalid date");
//                isValid = false;
//                dt.addClass("blur");
//            }
//            if (isValid == false) {
//                console.log('isValid = false');
//                event.preventDefault();

//            }
//            return isValid;
//        },

//        IsValidateDateTime: function (time, event) {
//            var v = (/^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])?$/i).test(time);
//            if (v == false) {
//                return false;
//            }
//            if (time.length < 5) {
//                return false;
//            }
//            return true;
//        },

//        InitializeLeftColLoggedInScript: function () {
//            $("#drpdown").click(function () {
//                var a = $(this).closest('ul').find('li a');
//                a.addClass('show');
//            });


//            $(".show").click(function () {
//                this.addClass('show');
//            });

//        },

//        KeepSessionAlive: function (model) {
//            var session = {
//                inactiveTimeout: model.SessionTimeOut * 60 * 1000, //(ms) The time until we display a warning message
//                warningTimeout: 1000, //(ms) The time until we log them out
//                minWarning: 100, //(ms) If they come back to page (on mobile), The minumum amount, before we just log them out
//                warningStart: null, //Date time the warning was started
//                warningTimer: null, //Timer running every second to countdown to logout
//                logout: function () { //Logout function once warningTimeout has expired
//                    console.log("logout");
//                    self.parent.location.href = pathtext + '/account/logout?logoutType=2';
//                    clearInterval(session.warningTimer);
//                },
//                keepaliveTimer: null,
//                keepaliveUrl: "../KeepSessionAlive/ChkSession",
//                keepaliveInterval: 1000000, //(ms) the interval to call said url
//                keepAlive: function () {
//                    $.ajax({ url: session.keepaliveUrl });


//                }
//            };

//            $(document).on("idle.idleTimer", function (event, elem, obj) {
//                var diff = (+new Date()) - obj.lastActive - obj.timeout,
//                    warning = (+new Date()) - diff;
//                if (diff >= session.warningTimeout || warning <= session.minWarning) {
//                } else {
//                    session.warningStart = (+new Date()) - diff;

//                    session.warningTimer = setInterval(function () {
//                        var remaining = Math.round((session.warningTimeout / 1000) - (((+new Date()) - session.warningStart) / 1000));
//                        if (remaining >= 0) {
//                        } else {
//                            session.logout();
//                        }
//                    }, 1000);
//                }
//            });

//            session.keepaliveTimer = setInterval(function () {
//                session.keepAlive();
//            }, session.keepaliveInterval);
//            $(document).idleTimer(session.inactiveTimeout);

//        },

//        SetLeftNavigationActiveTab: function (tabHref) {
              
//            $(".LeftNavigation .navbar .nav-header a").removeClass('active');
//            $('a[href*="' + tabHref + '"]').parent('li').addClass('active');
//        },

//        ExpandMenu: function (tabId) {

//            $('[data-target="#' + tabId + '"]').removeClass('collapsed');
//            $('[data-target="#' + tabId + '"]').addClass('active');
//            $('[data-target="#' + tabId + '"]').attr('aria-expanded', 'true');
//            $('#' + tabId).addClass('in');
//            $('#' + tabId).attr({ 'aria-expanded': 'true', 'height': '0px', 'style': 'none' });
//        },

//        InitializeFancyBox: function () {
//            $(".various").fancybox({
//                maxWidth: 1000,
//                maxHeight: 600,
//                width: '75%',
//                height: '75%',
//                autoSize: true,
//                autWidth: true,
//                autoHeight: true,
//                closeClick: false,
//                openEffect: 'none',
//                closeEffect: 'none',
//                helpers: {
//                    title: {
//                        type: 'outside'
//                    },
//                    overlay: {
//                        locked: false
//                    }
//                },
//                mouseWheel: true
//            });

//            $(".MoreActivity").fancybox({
//                maxWidth: 1200,
//                maxHeight: 1500,
//                fitToView: false,
//                width: '750px',
//                height: '470px',
//                autoSize: false,
//                closeClick: false,
//                openEffect: 'none',
//                closeEffect: 'none',
//                helpers: {
//                    title: {
//                        type: 'outside'
//                    },
//                    overlay: {
//                        locked: false
//                    }
//                },
//                mouseWheel: true
//            });

//            $(".MoreExpiry").fancybox({
//                maxWidth: 1200,
//                maxHeight: 1500,
//                fitToView: false,
//                width: '1200px',
//                height: '465px',
//                autoSize: false,
//                closeClick: false,
//                openEffect: 'none',
//                closeEffect: 'none',
//                helpers: {
//                    title: {
//                        type: 'outside'
//                    },
//                    overlay: {
//                        locked: false
//                    }
//                },
//                mouseWheel: true
//            });

//            $(".UserSettings").fancybox({
//                maxWidth: 1200,
//                maxHeight: 1500,
//                fitToView: false,
//                width: '320px',
//                height: '240px',
//                autoSize: false,
//                closeClick: false,
//                openEffect: 'none',
//                closeEffect: 'none',
//                helpers: {
//                    title: {
//                        type: 'outside'
//                    },
//                    overlay: {
//                        locked: false
//                    }
//                },
//                mouseWheel: true
//            });
//        },

//        ShowSuccessMessage: function (message) {
//            SuccessMessage(message);
//        },

//        ShowErrorMessage: function (message) {
//            ErrorMessage(message);
//        },

//        ShowWarningMessage: function (message) {
//            WarningMessage(message);
//        }

//    };

//}());

//function ValidateNumberOnly(event) {
//    if (((event.which < 48 && event.which > 8) || event.which > 57)) {
//        return false;
//    }
//}
//function showToolTip(control) {
//    control.title = $("#" + control.id + " option:selected").text();
//}
//function callBoxFancy(my_href) {

//    var hiddenAnchorControl = document.getElementById("hiddenclicker");

//    var ReceivedLink = my_href;
//    var FinalLink = ReceivedLink.replace(/&amp;/g, "&");

//    hiddenAnchorControl.href = FinalLink;

//    document.getElementById("hiddenclicker").click();
//}

//function OnCloseDiv(th, id, LocalAlertDetailId) {
//    var hidPR = $("#prclkcount");
//    if (hidPR.val() == "" || hidPR.val() == null) {
//        hidPR.val(id);

//        var orgId = $('#ddlOrganization').val();
//        var wsId = $('#ddlWorkstation').val();

//        var strData = orgId + ',' + wsId + ',' + id;

//        var data = { DataId: strData };
//        var url = "AlertLogs/";
//        var httpMethod = "POST";
//        MakeAjaxCall(httpMethod, url, data, true, function (data) {
//            $(th).parent().hide();
//            $("#msgbox").css("display", "inline-block");
//            if (parseInt(data) > 0)
//                $("#RecallsId").html(data);
//            else
//                $("#RecallsId").html(0);

//            setTimeout(function () {
//                $("#msgbox").hide();
//                hidPR.val("");
//            }, 5000);
//        }, function (xhr, ajaxOptions, thrownError) {
//            console.log('an error occurred in making ajax call');
//        });




//    }

//}

//function ValidateParInput() {
//    ValidateDates($("#txtDateFrom"), $("#txtDateTo"));

//}
//function ValidateInput() {
//    ValidateDates($("#txtDateFrom"), $("#txtDateTo"));
//}
//function ValidateExpiryInput() {
//    ValidateDates($("#txtDateFrom"), $("#txtDateTo"));
//}

//function ChkDateFrom() {
//    $("#txtDateFrom").keydown(function (event) {
//        if (event.keyCode > 0 || event.keyCode < 256) {
//            event.preventDefault();

//        }
//    });
//}
//function ChkDateFromAllowBackspace() {
//    $("#txtDateFrom").keydown(function (event) {
//        if ((event.keyCode > 0 && event.keyCode < 7) || (event.keyCode > 8 && event.keyCode < 256)) {
//            event.preventDefault();

//        }
//    });
//}
//function ChkDateToAllowBackspace() {
//    $("#txtDateTo").keydown(function (event) {
//        if ((event.keyCode > 0 && event.keyCode < 7) || (event.keyCode > 8 && event.keyCode < 256)) {
//            event.preventDefault();

//        }
//    });
//}
//function ChkDateTo() {
//    $("#txtDateTo").keydown(function (event) {
//        if (event.keyCode > 0 || event.keyCode < 256) {
//            event.preventDefault();

//        }
//    });
//}
//function DismissAlert(ptr) {
//    ptr.title = "Dismiss Alert";
//}
//function HandleClose() {

//    alert();
//}

//function ValidateDates(dtFrom, dtTo, event) {
//    var isValid = true;
//    var From = Date.parse(dtFrom.val());
//    var To = Date.parse(dtTo.val());

//    if (From > To) {
//        dtTo.css({
//            "border": "1px solid red",
//            "background": "#FFCECE"
//        });
//        dtTo.attr('title', "From Date must be less than To Date");
//        isValid = false;

//    }
//    else {

//        dtTo.css({
//            "border": "",
//            "background": ""
//        });
//        dtTo.removeAttr("title");
//    }
//    if (isValid == false) {
//        event.preventDefault();
//    }
//    return isValid;
//}

//function ValidateDate(dt, event) {
//    var isValid = true;
//    if (isValidDate(dt.val())) {

//        dt.css({
//            "border": "",
//            "background": ""
//        });
//        dt.attr('title', "");
//        dt.removeClass("blur");
//    }
//    else {

//        dt.css({
//            "border": "1px solid red",
//            "background": "#FFCECE"
//        });
//        dt.attr('title', "Invalid date");
//        isValid = false;
//        dt.addClass("blur");
//    }
//    if (isValid == false) {
//        event.preventDefault();
//    }

//    return isValid;
//}

////added by zia for validation of date on october 16, 2014
//function isValidDate(dateStr) {
//    // Checks for the following valid date formats:
//    // MM/DD/YYYY
//    if (dateStr == '') {
//        return false;
//    }

//    // Also separates date into month, day, and year variables
//    var datePat = /^(\d{1,2})(\/)(\d{1,2})\2(\d{4}|\d{4})$/;
//    var matchArray = dateStr.match(datePat); // is the format ok?
//    if (matchArray == null) {

//        return false;
//    }

//    month = matchArray[1]; // parse date into variables
//    day = matchArray[3];
//    year = matchArray[4];
//    if (month < 1 || month > 12) { // check month range
//        return false;
//    }
//    if (day < 1 || day > 31) {
//        return false;
//    }
//    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
//        return false;
//    }
//    if (month == 2) { // check for february 29th
//        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
//        if (day > 29 || (day == 29 && !isleap)) {
//            return false;
//        }
//    }

//    return true;  // date is valid
//}

//function closeParentFancyBox() {

//    parent.$.fancybox.close();
//    var pathname = window.location.pathname;
//    if (pathname.indexOf("dashboard") >= 0 || pathname.indexOf("ProductRecalls") >= 0) {
//        parent.$.fancybox.close();
//    } else {
//        self.parent.location.href = "../Reports/Home";
//    }

//}

//function ShowDialogBox(title, msg) {
//    $('<div></div>').appendTo('body')
//      .html('<div><h6>' + msg + '</h6></div>')
//      .dialog({
//          modal: true,
//          title: title,
//          zIndex: 10000,
//          autoOpen: true,
//          width: 'auto',
//          resizable: false,
//          draggable: false,
//          buttons: {
//              OK: function () {
//                  $(this).dialog("close");
//              }
//          },
//          close: function (event, ui) {
//              $(this).remove();
//          }
//      });
//}

//function ShowConfirmationDialog(sender, msg, title, success, failure) {
//    $('<div></div>').appendTo('body')
//      .html('<div><h6>' + msg + '</h6></div>')
//      .dialog({
//          modal: true,
//          title: title,
//          zIndex: 10000,
//          autoOpen: true,
//          width: 'auto',
//          resizable: false,
//          draggable: false,
//          buttons: {
//              Yes: function () {
//                  success(sender);
//                  $(this).dialog("close");
//              },
//              No: function () {
//                  failure(sender);
//                  $(this).dialog("close");
//              }
//          },
//          close: function (event, ui) {
//              $(this).remove();
//          }
//      });
//}

//function DDLOnMouseHover(elem) {
//    elem.title = $(elem).children("option").filter(":selected").text();
//}

//String.prototype.replaceAll = function (target, replacement) {
//    return this.split(target).join(replacement);
//};