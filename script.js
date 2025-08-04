var mobile_button = document.getElementById('mobile_btn')
var mobile_menu = document.getElementById('mobile_menu')
var nav_items = document.querySelectorAll('.nav-item')
let value = 0

const projetos = [
    {
        id: 1,
        nome: 'App de Clima',
        descricao: 'Applicativo que mostra informações do clima de cidades ao redor do mundo em tempo real',
        link: 'https://github.com/jacintobengui/blazor-weatherapp',
        imagens: [
            './img/app-clima.png',
        ]
    },
    {
        id: '2',
        nome: 'Portal do Administrador',
        descricao: 'Applicativo desktop que serve para gerenciar os dados do sistema e do aplicativo móvel "BemEstar"',
        link: 'https://github.com/18geovani/Bem-Estar-App',
        imagens: [
            './img/app-bemestar.png',
            './img/app-bemestar2.png',
            './img/app-bemestar3.png',
            './img/app-bemestar4.png'
        ]
    },
    {
        id: 3,
        nome: 'Dima',
        descricao: 'Aplicativo de controle financeiro que serve para registrar transações e ver um resumo financeiro',
        link: 'https://github.com/jacintobengui/desafio-ca-a-aos-bugs-balta.io',
        imagens: [
            './img/app-dima.png',
            './img/app-dima2.png',
            './img/app-dima3.png',
            './img/app-dima4.png',
        ]
    },
    {
        id: 4,
        nome: 'Assistente IA para Jogos',
        descricao: 'Aplicativo integrado a Gemini IA do Google para fornecer informações sobre jogos',
        link: 'https://github.com/jacintobengui/assistente-ia-jogos',
        imagens: [
            './img/app-ia.png',
        ]
    },
    {
        id: 5,
        nome: 'Bem-Estar',
        descricao: 'Aplicativo de gestão de saúde preventiva',
        link: 'https://github.com/18geovani/Bem-Estar-App',
        imagens: [
            './videos/app-bemestar.mp4',
        ]
    }
]

mobile_button.onclick = () => {
    mobile_menu.classList.toggle('active')
    if(mobile_menu.classList.contains('active')) {
        mobile_button.classList.remove('fa-bars')
        mobile_button.classList.add('fa-xmark')
    }else{
        mobile_button.classList.remove('fa-xmark')
        mobile_button.classList.add('fa-bars')
    }
}

nav_items.forEach(item => {
    item.onclick = () => {
        mobile_menu.classList.remove('active')
        mobile_button.classList.remove('fa-xmark')
        mobile_button.classList.add('fa-bars')
    }
})

document.querySelector('.close-modal').addEventListener('click', () => {
    document.querySelectorAll('dialog').forEach(modal => {
        modal.close()
    })
})

document.querySelectorAll('.open-modal').forEach(
    button => button.addEventListener('click', () => {
        document.querySelector('.slides').style.marginLeft = '0'
        value = 0

        const modalId = button.getAttribute('data-modal')
        const dataId = button.getAttribute('data-id')

        const data = projetos.find(p => p.id == dataId)

        if(dataId == 5){
            document.querySelector('.slides').innerHTML = `
            <video controls src="./videos/app-bemestar.mp4" alt=""></video>
            `
            document.getElementById('modal-nome').innerText = data.nome
            document.getElementById('modal-descricao').innerText = data.descricao
        } else {
            document.querySelector('.slides').innerHTML = `
            <img id="modal-img1"  alt="">
            <img id="modal-img2"  alt="">
            <img id="modal-img3"  alt="">
            <img id="modal-img4"  alt="">
            `

            document.getElementById('modal-img1').src = data.imagens[0]
            document.getElementById('modal-img2').src = data.imagens[1]
            document.getElementById('modal-img3').src = data.imagens[2]
            document.getElementById('modal-img4').src = data.imagens[3]
            document.getElementById('modal-nome').innerText = data.nome
            document.getElementById('modal-descricao').innerText = data.descricao
            document.getElementById('modal-github-btn').href = data.link
        }

        if(dataId == '4' || dataId == '1' || dataId == 5){
            document.getElementById('left').style.display = 'none'
            document.getElementById('right').style.display = 'none'
        }
        else{
            document.getElementById('left').style.display = 'block'
            document.getElementById('right').style.display = 'block'
        }

        const modal = document.getElementById(modalId)
        modal.showModal()
    })
)

document.querySelectorAll('.close-modal').forEach(
    button => button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal')
        const modal = document.getElementById(modalId)
        modal.close()
    })
)



document.getElementById('left').addEventListener('click', () => {
    const slides = document.querySelector('.slides')
    if(value == -300){
        return
    }
    value -= 100
    slides.style.marginLeft = value + '%'
})

document.getElementById('right').addEventListener('click', () => {
    const slides = document.querySelector('.slides')
    if(value == 0){
        return
    }
    value += 100
    slides.style.marginLeft = value + '%'
})



