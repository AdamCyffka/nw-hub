let bookmarks = [{
    title : 'Reference',
    items : [
        {
            name:'Forums',
            url:'https://forums.newworld.com/'
        },
        {
            name:'Server Status',
            url:'https://www.newworld.com/en-us'
        },
    ]
},{
    title : 'Tools',
    items : [
        {
            name: 'Map',
            url:'https://www.newworld-map.com/'
        },
        {
            name:'Database',
            url:'https://nwdb.info/'
        },
    ]
}]

//Getting Elements
const mainContent = document.getElementById('content');

function getDateTime() {
    var now     = new Date(); 
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds();   
    if(hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if(minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if(second.toString().length == 1) {
        second = '0' + second;
    }
    var dateTime = hour + ':' + minute + ':' + second;   
    return dateTime;
}

setInterval(function() {
    currentTime = getDateTime();
    document.getElementById("clock").innerHTML = currentTime;
}, 1000);

//Populating Bookmarks
function populateBookmarks(){
    document.documentElement.style.setProperty(`--noCat`, bookmarks.length);
    mainContent.innerHTML = '';
    bookmarks.forEach(function(i){
        let listGroup = document.createElement('div');
        listGroup.classList.add('list-group');
        let title = document.createElement('h4');
        title.innerHTML = i.title;
        let linkGroup = document.createElement('div');
        linkGroup.classList.add('link-group')
        listGroup.prepend(linkGroup);
        listGroup.prepend(title)
        i.items.forEach(function(link){
            a = document.createElement('a');
            a.classList.add('link');
            a.href = link.url;
            a.innerHTML = link.name;
            linkGroup.append(a)
        })
        mainContent.append(listGroup);
    })
}

populateBookmarks();