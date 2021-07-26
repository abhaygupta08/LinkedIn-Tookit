chrome.runtime.onMessage.addListener(
    function (request, sender) {
        if (request.requestType == "redirect") {
            window.location = (request.url);
        }
//----------------------------------------------------------
        if (request.requestType == "acceptConnections") {
            // console.log("OK")
            try{
                var showMore = document.getElementsByClassName("artdeco-card__action artdeco-button artdeco-button--3 artdeco-button--fluid artdeco-button--tertiary ember-view")
                if (showMore && showMore[0].innerText == "Show more") {
                    showMore[0].click()
                    }
            }
            catch(err){
                var accepts = document.querySelectorAll(".invitation-card__action-btn.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view")
                for (let i = 0; i < accepts.length; i++) {
                    accepts[i].click();
               }
             }
            var accepts = document.querySelectorAll(".invitation-card__action-btn.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view")
            for (let i = 0; i < accepts.length; i++) {
                accepts[i].click();
            }
        }
//----------------------------------------------------------
        if (request.requestType == "sendConnections") {
            var ZZcount = request.countCCCC;
            var connect = document.querySelectorAll(".artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.full-width")
            var done = 0;
            for (let i = 0; i < connect.length; i++) {
                if (done >= ZZcount) {
                    break;
                }
                if (connect[i].innerText == "Connect") {
                    connect[i].click();
                    done++;
                }
            }
        }
//----------------------------------------------------------
        //----------------------------------------------------------
        if (request.requestType == "cancelConnections") {
            setInterval(() => {
                var sentConnection = document.getElementsByClassName("invitation-card__action-btn artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--tertiary ember-view")

                for (i of sentConnection) {
                    i.click()
                    document.getElementsByClassName("artdeco-modal__confirm-dialog-btn artdeco-button artdeco-button--2 artdeco-button--primary ember-view")[0].click()
                }
            }, 1500);
        }

    });

