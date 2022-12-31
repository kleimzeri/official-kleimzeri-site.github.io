
let block = document.querySelector ('.kartochka') 
let block_1 = document.querySelector ('.obr_c_1') 
let open_header = document.querySelector ('.header1') 
let obr_block_1 = document.querySelector ('.obr_1_block-1') 
block.addEventListener('click',()=>{
    if( block.style.transform === 'rotateY(0deg)') {
        block.style.transform = 'rotateY(-90deg)'
        block.style.transitionDelay = '0s'

        block_1.style.transform = 'rotateY(90deg)'
        block_1.style.transform = 'rotateY(0deg)'
        block_1.style.transitionDelay = '1s'

        open_header.style.transform = 'rotateY(0deg)'
        open_header.style.transitionDelay = '1.5s'

        obr_block_1.style.transform = 'rotateY(0deg)'
        obr_block_1.style.transitionDelay = '2s'

    }
})