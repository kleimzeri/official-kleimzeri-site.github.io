
let btn_header_menu = document.querySelector ('#btn_header_menu') 
let header_2 = document.querySelector ('.header1_in_2_1') 
let btn_header_menu2 = document.querySelector ('.btn_in_header1_in_2_top-down') 
let arrow_menu_header2 = document.querySelector ('.arrow_menu_header1')
let arrow_menu_text_header2 = document.querySelector ('.arrow_menu_mid_title_pages_in')

btn_header_menu.addEventListener('click',()=>{
    if( header_2.style.marginTop === '-70px') {
        header_2.style.marginTop = '-45px'
        btn_header_menu2.style.opacity = '0'
        btn_header_menu2.style.height = '0px'
        arrow_menu_header2.style.marginTop = '25px'
        arrow_menu_header2.style.transitionDelay = '0.2s'
        arrow_menu_header2.style.opacity = '1'
        arrow_menu_text_header2.style.opacity = '1'
    }
})