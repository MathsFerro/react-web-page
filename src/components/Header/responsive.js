import $ from 'jquery';
$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.main-header').toggleClass('active');
        $('.menu-toggle').toggleClass('active');
    });
})