function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

var children = {
    'A': ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"],
    'A1': ["A1a", "A1b", "A1c", "A1d", "A1e", "A1f", "A1g", "A1h", "A1i"],
    'A1a': ["A1a1", "A1a2", "A1a3", "A1a4", "A1a5", "A1a6", "A1a7", "A1a8", "A1a9", "A1a10", "A1a11", "A1a12", "A1a13", "A1a14", "A1a15"],
    'A1a1': [],
    'A1a2': [],
    'A1a3': [],
    'A1a4': [],
    'A1a5': [],
    'A1a6': [],
    'A1a7': [],
    'A1a8': [],
    'A1a9': [],
    'A1a10': [],
    'A1a11': [],
    'A1a12': [],
    'A1a13': [],
    'A1a14': [],
    'A1a15': [],
    'A1b': ["A1b1"],
    'A1b1': ["A1b1a", "A1b1b", "A1b1c", "A1b1d", "A1b1e", "A1b1f", "A1b1g", "A1b1h", "A1b1i", "A1b1j"],
    'A1b1a': [],
    'A1b1b': [],
    'A1b1c': [],
    'A1b1d': [],
    'A1b1e': [],
    'A1b1f': [],
    'A1b1g': [],
    'A1b1h': [],
    'A1b1i': [],
    'A1b1j': [],
    'A1c': ["A1c1"],
    'A1c1': [],
    'A1d': ["A1d1", "A1d2", "A1d3", "A1d4"],
    'A1d1': [],
    'A1d2': [],
    'A1d3': [],
    'A1d4': [],
    'A1e': ["A1e1"],
    'A1e1': ["A1e1a", "A1e1b"],
    'A1e1a': [],
    'A1e1b': [],
    'A1f': ["A1f1"],
    'A1f1': [],
    'A1g': ["A1g1", "A1g2"],
    'A1g1': [],
    'A1g2': [],
    'A1h': ["A1h1", "A1h2", "A1h3"],
    'A1h1': [],
    'A1h2': [],
    'A1h3': [],
    'A1i': ["A1i1", "A1i2", "A1i3", "A1i4"],
    'A1i1': [],
    'A1i2': [],
    'A1i3': [],
    'A1i4': [],

    'A2': ["A2a"],
    'A2a': [],

    'A3': ["A3a", "A3b", "A3c", "A3d", "A3e"],
    'A3a': ["A3a1", "A3a2", "A3a3", "A3a4"],
    'A3a1': [],
    'A3a2': [],
    'A3a3': [],
    'A3a4': [],
    'A3b': ["A3b1", "A3b2", "A3b3"],
    'A3b1': [],
    'A3b2': [],
    'A3b3': [],
    'A3c': ["A3c1", "A3c2", "A3c3", "A3c4", "A3c5", "A3c6"],
    'A3c1': [],
    'A3c2': [],
    'A3c3': [],
    'A3c4': [],
    'A3c5': [],
    'A3c6': [],
    'A3d': [],
    'A3e': ["A3e1", "A3e2", "A3e3", "A3e4", "A3e5", "A3e6"],
    'A3e1': [],
    'A3e2': [],
    'A3e3': [],
    'A3e4': [],
    'A3e5': [],
    'A3e6': [],

    'A4': ["A4a", "A4b", "A4c", "A4d"],
    'A4a': [],
    'A4b': [],
    'A4c': [],
    'A4d': [],

    'A5': ["A5a", "A5b", "A5c"],
    'A5a': ["A5a1", "A5a2"],
    'A5a1': [],
    'A5a2': [],
    'A5b': ["A5b1", "A5b2"],
    'A5b1': [],
    'A5b2': [],
    'A5c': ["A5c1", "A5c2"],
    'A5c1': ["A5c1a", "A5c1b"],
    'A5c1a': [],
    'A5c1b': [],
    'A5c2': [],

    'A6': ["A6a", "A6b", "A6c", "A6d"],
    'A6a': ["A6a1", "A6a2", "A6a3", "A6a4", "A6a5", "A6a6", "A6a7", "A6a8", "A6a9", "A6a10", "A6a11"],
    'A6a1': [],
    'A6a2': [],
    'A6a3': [],
    'A6a4': [],
    'A6a5': [],
    'A6a6': [],
    'A6a7': [],
    'A6a8': [],
    'A6a9': [],
    'A6a10': [],
    'A6a11': [],
    'A6b': ["A6b1", "A6b2", "A6b3", "A6b4", "A6b5", "A6b6"],
    'A6b1': ["A6b1a", "A6b1b", "A6b1c", "A6b1d"],
    'A6b1a': [],
    'A6b1b': [],
    'A6b1c': [],
    'A6b1d': [],
    'A6b2': [],
    'A6b3': [],
    'A6b4': [],
    'A6b5': [],
    'A6b6': [],
    'A6c': ["A6c1", "A6c2", "A6c3", "A6c4", "A6c5", "A6c6"],
    'A6c1': ["A6c1a", "A6c1b", "A6c1c"],
    'A6c1a': [],
    'A6c1b': [],
    'A6c1c': [],
    'A6c2': ["A6c2a", "A6c2b", "A6c2c"],
    'A6c2a': [],
    'A6c2b': [],
    'A6c2c': [],
    'A6c3': ["A6c3a", "A6c3b", "A6c3c"],
    'A6c3a': [],
    'A6c3b': [],
    'A6c3c': [],
    'A6c4': ["A6c4a", "A6c4b", "A6c4c"],
    'A6c4a': [],
    'A6c4b': [],
    'A6c4c': [],
    'A6c5': ["A6c5a", "A6c5b"],
    'A6c5a': [],
    'A6c5b': [],
    'A6c6': ["A6c6a", "A6c6b", "A6c6c"],
    'A6c6a': [],
    'A6c6b': [],
    'A6c6c': [],
    'A6d': ["A6d1", "A6d2", "A6d3", "A6d4", "A6d5", "A6d6", "A6d7", "A6d8", "A6d9", "A6d10", "A6d11", "A6d12", "A6d13", "A6d14", "A6d15", "A6d16", "A6d17", "A6d18"],
    'A6d1': [],
    'A6d2': [],
    'A6d3': [],
    'A6d4': [],
    'A6d5': [],
    'A6d6': [],
    'A6d7': [],
    'A6d8': [],
    'A6d9': [],
    'A6d10': [],
    'A6d11': [],
    'A6d12': [],
    'A6d13': [],
    'A6d14': [],
    'A6d15': [],
    'A6d16': [],
    'A6d17': [],
    'A6d18': [],

    'A7': ["A7a", "A7b", "A7c", "A7d"],
    'A7a': [],
    'A7b': [],
    'A7c': [],
    'A7d': [],

    'A8': ["A8a", "A8b"],
    'A8a': ["A8a1", "A8a2", "A8a3", "A8a4"],
    'A8a1': [],
    'A8a2': [],
    'A8a3': [],
    'A8a4': [],
    'A8b': ["A8b1", "A8b2", "A8b3", "A8b4", "A8b5", "A8b6", "A8b7", "A8b8", "A8b9", "A8b10", "A8b11"],
    'A8b1': [],
    'A8b2': [],
    'A8b3': [],
    'A8b4': [],
    'A8b5': [],
    'A8b6': [],
    'A8b7': [],
    'A8b8': [],
    'A8b9': [],
    'A8b10': [],
    'A8b11': [],

    'A9': [],

    'A10': ["A10a", "A10b", "A10c", "A10d", "A10e", "A10f"],
    'A10a': [],
    'A10b': [],
    'A10c': [],
    'A10d': [],
    'A10e': [],
    'A10f': [],

    'B': ["B1", "B2"],
    'B1': ["B1a", "B1b"],
    'B1a': ["B1a1", "B1a2", "B1a3", "B1a4"],
    'B1a1': [],
    'B1a2': [],
    'B1a3': [],
    'B1a4': [],
    'B1b': [],

    'B2': []
};

function hideChildren(parentId) {
    $("#" + parentId).addClass('item-hidden')
        .removeClass('item-show');

    $("#" + parentId).find('.fa')
        .addClass('fa-chevron-down')
        .removeClass('fa-chevron-up');

    children[parentId].forEach(element => {
        hideChildren(element);
    });
}


function change(id) {
    $('.list-group').find('.active').removeClass("active").addClass('bg-light');
    $("#" + id).addClass("active").removeClass('bg-light');

    var $element = $("#" + id).find('.fa')[0];

    if ($element !== undefined && hasClass($element, 'fa-chevron-down')) {
        children[id].forEach(element => {
            $("#" + element).addClass('item-show')
                .removeClass('item-hidden');
        });
    } else {
        children[id].forEach(element => {
            hideChildren(element);
        });
    }

    $("#" + id).find('.fa')
        .toggleClass('fa-chevron-down')
        .toggleClass('fa-chevron-up');

    showDetail(id);

    return false;
}

function showDetail(id) {
    $(".detail").hide();

    if ($("#detail_" + id).length == 0) {
        var title = $("#" + id).text();
        showNoDetail(title);

        return false;
    }

    $("#detail_" + id).show();

    return false;
}

function showNoDetail(title) {
    $("#detail_NA").find(".card-header").find("h3").text(title);
    $("#detail_NA").show();
}

$(function () {

    $(".card-with-no-text").each(function (index, value) {
        var id = $(this)[0].id.substr(7);
        var $div = $(this);

        var $card = $("<div>").addClass("card")
            .append(
                $("<div>").addClass("card-header")
                    .append(
                        $("<h3>").text($("#" + id).text().trim())
                    )
            ).append(
                $("<div>").addClass("card-body")
                    .append(
                        $("<div>", {
                            'id': "images_" + id
                        }).addClass("with-no-img")
                    )
            )

        $div.append($card);
    });

    $(".with-no-img").each(function (index, value) {
        var id = $(this)[0].id.substr(7);
        var $div = $(this);

        $row = $("<div>").addClass("row");

        $.each(children[id], function (index, value) {

            if (index != 0 && index % 4 == 0) {
                $div.append($row);
                $row = $("<div>").addClass("row");
            }
            $row.append(getImageCardWithNoimage(value));
        });

        $div.append($row);
    });

    function getImageCardWithNoimage(id) {

        return $("<div>").addClass("col-md-3")
            .append(
                $("<div>").addClass("card mb-3 shadow-sm")
                    .append(
                        $("<svg>").addClass("bd-placeholder-img card-img-top")
                            .attr({
                                'width': '100%',
                                'height': "225",
                                'preserveAspectRatio': "xMidYMid slice",
                                'focusable': "false",
                                'role': "img",
                                'aria-label': "Placeholder: Thumbnail"
                            })
                            .append(
                                $("<title>").text($("#" + id).text().trim())
                            )
                            .append(
                                $("<image>", {
                                    'href': "img/products/na.png"
                                }).attr({
                                    'width': "100%",
                                    'height': "100%"
                                })
                            )
                    )
                    .append(
                        $("<div>").addClass("card-body shorter-link")
                            .append(
                                $("<a>", {
                                    href: "javascript:void(0)",
                                    onClick: "showDetail('" + id + "')"
                                }).text($("#" + id).text().trim())
                            )
                    )
            );

    }


    $(".shorter-link").find("a").each(
        function (index, value) {
            var text = $(this).text().trim();

            if (text.length > 16) {
                text = text.substr(0, 14) + "..."
            }
            $(this).text(text);
        });

    $("body").html($("body").html());
});
