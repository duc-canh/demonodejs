function loadMore() {
    var p = [];// ti nua se lay tu
    $.ajax({ //
        url: "https://foodgroup.herokuapp.com/api/category/1", // giống như dùng file todaySpecial.json -- goi la Web API
        method:"GET",
        success:function (rs){ // callback
            p = rs.data.foods; // chúng ta cần 1 array
            var row = $("#row");
            for (var i = 0; i < p.length; i++) {
                var ct = "<div class=\"col-md-3\">\n" +
                    "            <h2>" + p[i].id + "</h2>\n" +
                    "            <img src=\"" + p[i].image + "\"/>\n" +
                    "            <h2 class='vd1'>" + p[i].name + "</h2>\n" +
                    "            <h3>"  + p[i].price +  "</h3>\n" +
                    " <div id=\"detail\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <button type=\"button\" onclick=\"detail()\">detail</button>\n" +
                    "        </div>"; // ct chi la 1 string thoi

                row.append(ct); // row.html(row.html() +ct)
                // row.prepend(ct) // row.html(ct+row.html());
            }
        }

    });

}
catelog();
loadMore();
function catelog() {
    var p = {};// ti nua se lay tu
    $.ajax({ //
        url: "https://foodgroup.herokuapp.com/api/category/1", // giống như dùng file todaySpecial.json -- goi la Web API
        method:"GET",
        success:function (rs){ // callback
            p = rs.data.category; // chúng ta cần 1 array
            var menu = $("#menu");

                var ct = "<div class='name' >\n" +
                    "            <h2 class='vd1'>" + p.name + "</h2>\n" +
                    "            <img src=\"" + p.icon + "\"/>\n" +
                    "        </div>"; // ct chi la 1 string thoi
                menu.prepend(ct); // row.html(row.html() +ct)
                // row.prepend(ct) // row.html(ct+row.html());

        }

    });

}

function detail(){
    var p ={};
    $.ajax({
        url : "https://foodgroup.herokuapp.com/api/food/1",
        method :"GET",
        success : function (rs){
            p = rs.data;
            var detail = $("#detail");
            var ct = "<div >\n" +
                "            <h2 >" + p.name + "</h2>\n" +
                "            <img src=\"" + p.image + "\"/>\n" +
                "            <h4 >" + p.description + "</h4>\n" +
                "            <h3>"  + p.price +  "</h3>\n" +
                "        </div>"; // ct chi la 1 string thoi
            detail.append(ct); // row.html(row.html() +ct)
            // row.prepend(ct) // row.html(ct+row.html());
        }
    });
}
detail();
var c = " <div id=\"detail\">\n" +
    "\n" +
    "            </div>\n" +
    "            <button type=\"button\" onclick=\"detail()\">detail</button>";