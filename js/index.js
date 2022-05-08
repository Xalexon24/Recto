
// === Change info about iphone ===

const DATA_CHECK_IPHONE = 'iphone',
    DATA_CHECK_IPHONE_S = 'iphoneS',
    DATA_CHECK_IPHONE_PRO = 'iphonePro',
    DATA_CHECK_IPHONE_MAX = 'iphoneMax'

const dataIphone = {
    iphone: {
        srcImage: './imagine/14.jpg',
        header: 'Iphone 14',
        paragraph: 'Iphone 14 стане новим флагманом у світі смартфонів. Звичайна, але потужна версія айфону на базі процессора Apple A16 Bionic та з камерою 48МП від Sony. Ідеальний баланс між ціною та потужністю.'
    },
    iphoneS: {
        srcImage: './imagine/14 S.jpg',
        header: 'Iphone 14 S',
        paragraph: 'Iphone 14 S - спрощена версія звичайного Iphone 14. З недоліків на фоні свого звичайного Iphone 14 - процессор Apple A15 Bionic та камера у 32МП.'
    },
    iphonePro: {
        srcImage: './imagine/14 pro.jpg',
        header: 'Iphone 14 Pro',
        paragraph: 'Iphone 14 PRO - удосконалена версія Iphone 14. Перевага у більшій кількості пам\'яті у розмірі 512ГБ, а також камера у 64МП. Ідеально підійде для фотографів та любителів великої кількості селфі.'
    },
    iphoneProMax: {
        srcImage: './imagine/14 pro max.jpg',
        header: 'Iphone 14 Pro Max',
        paragraph: 'Iphone 14 PRO MAX - це надпотужна версія Iphone 14. 1ТБ вбудованої пам\'яті та 16ГБ ОЗУ. Камера у 128МП та 4 допоміжні камери від Sony. Ступінь вологостійкості та водонепроникності IP68! Ідеальний варіант для тих, хто обожнює ідеальну техніку.'
    }
}

const select = document.querySelector('.form-input-select')

const iphoneImage = document.querySelector('#iphoneImage'),
    iphoneHeader = document.querySelector('#iphoneHeader'),
    iphoneParagraph = document.querySelector('#iphoneParagraph')


const changedIphoneInformation = (imgSrc, header, paragraph) => {
    iphoneImage.src = imgSrc
    iphoneHeader.innerHTML = header
    iphoneParagraph.innerHTML = paragraph
}

select.addEventListener('change', (e) => {
    const currentElement = e.target.value
    // console.log(currentElement)
    switch (currentElement) {
        case DATA_CHECK_IPHONE: {
            const {srcImage, header, paragraph} = dataIphone.iphone
            changedIphoneInformation(srcImage, header, paragraph)
            break
        }
        case DATA_CHECK_IPHONE_S: {
            const {srcImage, header, paragraph} = dataIphone.iphoneS
            changedIphoneInformation(srcImage, header, paragraph)
            break
        }
        case DATA_CHECK_IPHONE_PRO: {
            const {srcImage, header, paragraph} = dataIphone.iphonePro
            changedIphoneInformation(srcImage, header, paragraph)
            break
        }
        case DATA_CHECK_IPHONE_MAX: {
            const {srcImage, header, paragraph} = dataIphone.iphoneProMax
            changedIphoneInformation(srcImage, header, paragraph)
            break

        }
        default: {
            iphoneImage.src = './imagine/14.jpg'
            iphoneHeader.innerHTML = 'Iphone 14'
            break
        }
    }
})

// === Close and open modal window ===

const popupWrapper = document.querySelector('#popupWrapper'),
    popupContent = document.querySelector('#popupContent'),
    formSubmit = document.querySelector('#formSubmit')

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    popupContent.classList.add('active')
    popupWrapper.classList.add('active')
})
popupWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-wrapper')) {
        popupWrapper.classList.remove('active')
        popupContent.classList.remove('active')
    }
})


