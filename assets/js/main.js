class socialityApp {
  loadContent = () => {
    fetch("../assets/db/data.json")
      .then((response) => response.json())
      .then((items) => {
        let dateArea = document.querySelector("#items");
        let cardArea;

        for (const [key, value] of Object.entries(
          items.posts_by_date
        ).reverse()) {
          let dateHTML = "";
          let cardHTML = "";

          dateHTML += ` <div class="heading-fourth">${this.calculateDate(
            key
          )}</div>
                        <div class="row" id="card-${key}">
                            <!-- CARD -->
                            <div class="col-lg-4 col-md-6">
                                <div class="report-box-inner" >
                                <!-- CONTENT -->
                                </div>
                            </div>
                            <!-- CARD -->
                        </div>`;

          dateArea.innerHTML += dateHTML;

          cardArea = document.querySelector(`#card-${key}`);

          value.map((element) => {
            // var publishClass = element.is_published
            //   ? "STATUS_PUBLISHED"
            //   : "STATUS_APPROVED";

            cardHTML += `
                <div class="col-lg-4 col-md-6">
                  <div class="report-box-inner">
                      <div
                      class="
                          post-card-box
                          with-status
                          facebook
                          STATUS_PUBLISHED
                          ${this.statusFinder(element.status)}
                      "
                      >
                      <div class="post-status-type">
                          <span>
                          <i class="fab ${this.whichPlatform(
                            element.account.channel
                          )}"></i>
                          </span>
                      </div>
                      <div class="post-detail">
                          <div class="brand-header clearfix">
                          <div class="brand-text">
                              <!-- DATE -->
                              <div class="date">
                              <span>${this.calculateDate(
                                element.published_at
                              )}</span>
                              </div>
                              <!-- DATE -->
                          </div>
                          <!-- POST ACTION -->
                          <div class="post-actions">
                              <div class="STATUS_PUBLISHED actions-container">
                              <a href="#" class="delete">
                                  <i class="fas fa-check"></i>
                              </a>
                              <a href="#" class="duplicate">
                                  <i class="fas fa-trash-alt"></i>
                              </a>
                              <a href="#">
                                  <i class="fas fa-ellipsis-h-alt"></i>
                              </a>
                              </div>
                          </div>
                          <!-- POST ACTION -->
                          </div>

                          <div class="post-body">
                          <div class="inner-body">
                              <span>${element.entry.message}</span>
                          </div>
                          </div>
                          <div class="post-media">
                          <div class="photo">
                              <div class="slide-item">
                              <a
                                  href="${element.entry.image[0]}"
                                  target="_blank"
                                  ><img
                                  alt=""
                                  src="${element.entry.image[0]}"
                                  onerror="this.onerror=null;this.src='../assets/img/no-post-image.png';"
                              /></a>
                              </div>
                          </div>
                          </div>

                          <div class="post-statics clearfix">
                          <div class="item">
                              <i class="far fa-thumbs-up"></i>
                              <span>0</span>
                          </div>
                          <div class="item">
                              <i class="far fa-comment-alt"></i>
                              <span>0</span>
                          </div>
                          <div class="item">
                              <i class="far fa-share-alt"></i>
                              <span>0</span>
                          </div>
                          <div class="item">
                              <i class="far fa-eye"></i>

                              <span>0</span>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>`;
          });
          cardArea.innerHTML = cardHTML;
        }
      });
  };

  whichPlatform = (social) => {
    switch (social) {
      case "facebook":
        return "fa-facebook-f";
      case "twitter":
        return "fa-twitter";
      case "instagrambusiness":
        return "fa-instagram";
      default:
        break;
    }
  };

  statusFinder = (status) => {
    switch (status) {
      case 0:
        return "STATUS_WAITING";

      case 1:
        return "STATUS_APPROVED";

      case 2:
        return "STATUS_NOT_PUBLISHED";

      case 3:
        return "STATUS_PUBLISHED";

      default:
        break;
    }
  };

  calculateDate = (date) => {
    var newDate = date.split(" ");
    var newTime = newDate[1];

    if (newDate.length == 2) {
      newTime = newTime.split(":");
    } else {
      newTime = "";
    }
    newDate = newDate[0].split("-");

    if (newDate[1] == "01") {
      if (newTime.length == 3) {
        return (
          newDate[2] +
          " Ocak " +
          newDate[0] +
          " " +
          newTime[0] +
          ":" +
          newTime[1]
        );
      } else {
        return newDate[2] + " Ocak " + newDate[0];
      }
    } else if (newDate[1] == "02") {
      if (newTime.length == 3) {
        return (
          newDate[2] +
          " Şubat " +
          newDate[0] +
          " " +
          newTime[0] +
          ":" +
          newTime[1]
        );
      } else {
        return newDate[2] + " Şubat " + newDate[0];
      }
    } else if (newDate[1] == "03") {
      if (newTime.length == 3) {
        return (
          newDate[2] +
          " Mart " +
          newDate[0] +
          " " +
          newTime[0] +
          ":" +
          newTime[1]
        );
      } else {
        return newDate[2] + " Mart " + newDate[0];
      }
    } else if (newDate[1] == "04") {
      if (newTime.length == 3) {
        return (
          newDate[2] +
          " Nisan " +
          newDate[0] +
          " " +
          newTime[0] +
          ":" +
          newTime[1]
        );
      } else {
        return newDate[2] + " Nisan " + newDate[0];
      }
    } else if (newDate[1] == "05") {
      if (newTime.length == 3) {
        return (
          newDate[2] +
          " Mayıs " +
          newDate[0] +
          " " +
          newTime[0] +
          ":" +
          newTime[1]
        );
      } else {
        return newDate[2] + " Mayıs " + newDate[0];
      }
    } else if (newDate[1] == "06") {
      if (newTime.length == 3) {
        return (
          newDate[2] +
          " Haziran " +
          newDate[0] +
          " " +
          newTime[0] +
          ":" +
          newTime[1]
        );
      } else {
        return newDate[2] + " Haziran " + newDate[0];
      }
    } else if (newDate[1] == "07") {
      if (newTime.length == 3) {
        return (
          newDate[2] +
          " Temmuz " +
          newDate[0] +
          " " +
          newTime[0] +
          ":" +
          newTime[1]
        );
      } else {
        return newDate[2] + " Temmuz " + newDate[0];
      }
    } else if (newDate[1] == "08") {
      if (newTime.length == 3) {
        return (
          newDate[2] +
          " Ağustos " +
          newDate[0] +
          " " +
          newTime[0] +
          ":" +
          newTime[1]
        );
      } else {
        return newDate[2] + " Ağustos " + newDate[0];
      }
    } else if (newDate[1] == "09") {
      if (newTime.length == 3) {
        return (
          newDate[2] +
          " Eylül " +
          newDate[0] +
          " " +
          newTime[0] +
          ":" +
          newTime[1]
        );
      } else {
        return newDate[2] + " Eylül " + newDate[0];
      }
    } else if (newDate[1] == "10") {
      if (newTime.length == 3) {
        return (
          newDate[2] +
          " Ekim " +
          newDate[0] +
          " " +
          newTime[0] +
          ":" +
          newTime[1]
        );
      } else {
        return newDate[2] + " Ekim " + newDate[0];
      }
    } else if (newDate[1] == "11") {
      if (newTime.length == 3) {
        return (
          newDate[2] +
          " Kasım " +
          newDate[0] +
          " " +
          newTime[0] +
          ":" +
          newTime[1]
        );
      } else {
        return newDate[2] + " Kasım " + newDate[0];
      }
    } else if (newDate[1] == "12") {
      if (newTime.length == 3) {
        return (
          newDate[2] +
          " Aralık " +
          newDate[0] +
          " " +
          newTime[0] +
          ":" +
          newTime[1]
        );
      } else {
        return newDate[2] + " Aralık " + newDate[0];
      }
    } else {
      return "Hatalı Tarih Biçimi";
    }
  };
}

let App = new socialityApp();

App.loadContent();
