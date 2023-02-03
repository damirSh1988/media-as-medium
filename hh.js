





// WARNING: fetch is not supported in IE, so it may need a polyfill


function execute() {
    const url = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=p0BfNUdO63dbdnf6G20QtJNXNFpDWOUQ";
    const options = {
      method: "GET",
      headers: {
        "Accept": "application/json"
      },
    };
    fetch(url, options)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data.results);
      let article = `<div class="news">
                          <div class="left">
                              <div class="top">
                                  <div class="info-top">
                                      <img src="./assets/img.png" alt="" id="avatar">
                                      <p class="author">Authors name</p>
                                      <p class="delimetr">in</p>
                                      <p class="topic">Topics name</p>
                                      <p class="delimetr">•</p>
                                      <p class="date">7 july</p>
                                  </div>
                                  <div class="top-text">
                                      <p class="desk1"></p>
                                      <p class="desk2">You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.</p>
                                  </div>
                              </div>
                              <div class="info-bottom">
                                  <div class="info">
                                      <button class="info-btn"> 
                                          <p id="btn-text">Java Script</p> 
                                      </button>
                                      <p class="read">12 min read</p>
                                      <p class="delimetr">·</p>
                                      <p class="sel">Selected for you</p>
                                  </div>
                                  <div class="actions">
                                      <div class="icon"></div>
                                      <div class="icon"></div>
                                      <div class="icon"></div>
                                  </div>
                              </div>
                          </div>
                          <img src="" alt="logo">
                      </div>`;

    const articles = document.getElementById('newslist');

    data.results.forEach((item, index) => {
    let newArticle = article.replace('class="desk1">', `class="desk1">${item.title}`);
        newArticle = newArticle.replace('class="desk2">', `class="desk2">${item.abstract}`);
        newArticle = newArticle.replace('img src="" alt="logo">', `img src="${item.multimedia[0].url}" alt="logo">`)
        
    articles.innerHTML += newArticle;
})  
    })
    .catch(e => console.log(e))
      
  }

  execute();
  