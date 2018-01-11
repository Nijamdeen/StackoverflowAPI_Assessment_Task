var xhrPool = [];
var activityCounter = 0;

function SetAjaxDefaultBehavior() {

    $(document).ajaxSend(function (xhr) {
        activityCounter++;

            //$('body').loading('start');
    });

    $(document).ajaxComplete(function (e, jqXHR, options) {
        xhrPool = $.grep(xhrPool, function (x) {
            return x != jqXHR
        });
        activityCounter--;
        if (activityCounter < 1) {
            //$('body').loading('stop');
        }
    });
}

function AbortAllAjaxCalls() {
    $(xhrPool).each(function (idx, xhr) {
        xhr.abort();
    });
    xhrPool = [];
}

function RemoveCallFromPool(ajaxXhr) {
    var i = xhrPool.indexOf(ajaxXhr);
    if (i > -1) {
        xhrPool.splice(i, 1); //removing from pool
    }
}

function MakeAjaxCall(httpmethod, url, data, abortPreviousCalls, successCallback, failureCallback, async, cache) {
    $('body').loading('start');
    if (typeof async == 'undefined')
        async = true;
    if (typeof cache == 'undefined')
        cache = false;

    var defObj = $.ajax({
        type: httpmethod,
        url: url,
        data: data,
        async: async,
        cache: cache,
        beforeSend: function (xhr) {

            if (abortPreviousCalls) {
                AbortAllAjaxCalls();
            }

            xhrPool.push(xhr);
        },
        success: function (resp) {
            
            if (resp.status == "Unauthorized") {
                window.location.href = resp.url;
                return;
            }

            try {
                if (successCallback)
                    successCallback(resp);
            } catch (err) {

                console.log('error occurred while making ajax call--' + err);
                console.log(err);
            }
            $('body').loading('stop');
        },
        error: function (err, type, httpStatus) {
            if (failureCallback)
                failureCallback(err, type, httpStatus);
            $('body').loading('stop');

            console.log('Error occurred in ajax call' + err.status + " - " + err.responseText + " - " + httpStatus);
        },
        complete: function (xhr) {

            RemoveCallFromPool(xhr);
            $('body').loading('stop');
        }
    });

    return defObj;
}