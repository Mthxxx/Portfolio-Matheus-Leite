// ===== VARIÁVEIS GLOBAIS =====
let currentLang = "PT";
let currentTheme = 'light';
window.projetoModalAberto = null;

// ===== CONFIGURAÇÃO DO SUPABASE =====
// Certifique-se de que estes dados estão corretos e correspondem ao seu projeto
const supabaseUrl = 'https://xfemcuqknfenubjhqeww.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmZW1jdXFrbmZlbnViamhxZXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0ODE1NjgsImV4cCI6MjA3OTA1NzU2OH0.e8gWh4HE440xtIk9EyganWGJAeTqi2r3u4SjKUKzgbI';

// Inicializa o cliente Supabase
let supabase = null;
if (window.supabase) {
    supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
} else {
    console.warn("A biblioteca do Supabase não foi carregada. O formulário não irá funcionar.");
}

// ===== DICIONÁRIO DE TRADUÇÕES =====
const translations = {
    "PT": {
        "btn-lang": "PT",
        "hero-title": "Matheus Leite Rodrigues",
        "hero-subtitle": "Desenvolvedor em formação",
        "about-title": "Sobre mim",
        "about-text": "Meu nome é Matheus e sou estudante de Ciência da Computação, com formação técnica em Desenvolvimento de Jogos Digitais. Desde cedo me interessei por tecnologia e pela forma como a programação pode transformar ideias em soluções reais.<br><br>Tenho experiência com lógica de programação, modelagem de dados, desenvolvimento web, desenvolvimento de softwares e desenvolvimento de jogos digitais. Também possuo uma base em Inteligência Artificial, Machine Learning e fundamentos de sistemas, além de estar sempre em busca de aprender novas ferramentas e linguagens. Atualmente, atuo como assistente financeiro, onde desenvolvi bom domínio de organização, atenção aos detalhes e uso do Excel para otimizar processos, habilidades que também aplico nos meus projetos de tecnologia.<br><br>Sou uma pessoa dedicada, comunicativa e curiosa, com facilidade para aprender e me adaptar a novos desafios. Busco uma oportunidade de estágio em programação para aprimorar minhas habilidades técnicas, ganhar experiência prática e contribuir com soluções criativas e eficientes no mundo da tecnologia.",
        "btn-cvpt": "Baixar Currículo (PT)",
        "btn-cven": "Baixar Currículo (EN)",
        "tech-title": "Tecnologias",
        "tools-title": "Ferramentas",

        // card contato
        "contact-modal-title": "Fale comigo",
        "contact-modal-name": "Nome",
        "contact-modal-phone": "Telefone",
        "contact-modal-email": "E-mail",
        "contact-modal-reason": "Motivo do contato",
        "contact-modal-send": "Enviar",
        "contact-modal-close": "X",
        "contact-modal-success": "Mensagem enviada com sucesso!",
        "contact-modal-fail": "Erro ao enviar mensagem. Tente novamente.",
        "contact-modal-enviar": "Enviando...",

        // card certificações

        "certs-title": "Certificações",
        "cert1-title": "Em Breve",
        "cert2-title": "Em Breve",
        "cert3-title": "Em Breve",


        // "journey-header: Minha Jornada Além do Código:<br>Como a Curiosidade Moldou Minha Carreira Tech.",
        "contact-title": "Contato",
        "projects-title": "Projetos",
        "proj1-title": "MTclicker",
        "proj1-desc": "MTclicker — um autoclicker desenvolvido inteiramente por mim, utilizando a biblioteca JNativeHook e com todos os assets desenhados manualmente para criar uma interface única.",
        "proj2-title": "Galeria de fotos",
        "proj2-desc": "Um site especial criado para guardar fotos minhas e da minha namorada, com sistema de login usando banco de dados, efeito de pétalas caindo ao abrir a página e uma galeria personalizada feita por mim.",
        "proj3-title": "Venda de ingressos",
        "proj3-desc": "Site de venda de ingressos desenvolvido para um trabalho da faculdade, com três categorias — musical, festa universitária e teatro — além de uma lojinha, tudo integrado a um banco de dados para registrar usuários e compras.",
        "proj4-title": "Automações em Python",
        "proj4-desc": "Automatizações simples desenvolvidas em Python no início do curso, criadas para praticar lógica de programação e resolver tarefas repetitivas de forma rápida e eficiente.",
        "proj5-title": "Orkut 2",
        "proj5-desc": "Orkut 2 é um pequeno site criado em uma aula de HTML, com um sistema simples de postagens para testar conceitos básicos de estrutura, formulários e exibição de conteúdo",
        "proj6-title": "Desktop Goose",
        "proj6-desc": "Um Desktop Goose personalizado desenvolvido por mim em Python com Pygame, usando sprites próprios, mecânica de perseguição ao mouse, sistema de arbustos explosivos e diversas animações criadas manualmente.",
        "proj1-modal": "O MTclicker é um autoclicker que desenvolvi totalmente do zero, desde a lógica principal até o design da interface. Um dos maiores desafios foi integrar corretamente a biblioteca JNativeHook, que exigiu configuração específica no projeto, ajustes de dependência e diversos testes até funcionar de forma estável. A parte do código também foi bastante complexa, já que precisei lidar com eventos globais, threads e controle preciso dos cliques para evitar travamentos e comportamentos inesperados. Além disso, todos os assets do MTclicker foram desenhados manualmente por mim, garantindo uma identidade visual própria e exclusiva. Outro ponto importante foi o processo de transformar o projeto em um arquivo .exe distribuível, o que envolveu empacotamento, ajustes de permissões, caminhos de recursos e testes em diferentes máquinas para garantir compatibilidade. No final, com bastante dedicação e com a sua ajuda ao longo do processo, consegui entregar o MTclicker como um software completo, funcional e com visual próprio.",
        "proj2-modal": "Este projeto é um site que desenvolvi para reunir fotos minhas e da minha namorada de um jeito especial. Ele possui um sistema completo de login integrado a um banco de dados, garantindo que apenas nós possamos acessar a galeria. Um dos detalhes mais marcantes do site é o efeito de pétalas caindo assim que a página é aberta, algo que implementei em JavaScript para dar uma atmosfera mais romântica e personalizada. Além da parte visual, também organizei toda a galeria com nossas fotos, adicionei um textinho especial e deixei tudo bem leve e intuitivo. O processo envolveu lidar com autenticação, estruturação do banco, criação do efeito de partículas e organização dos assets, resultando em um site bonito, funcional e emocionalmente importante para mim.",
        "proj3-modal": "Este projeto é um site completo de venda de ingressos desenvolvido para um trabalho da faculdade, criado com três categorias principais: musicais, festas universitárias e peças de teatro. Além dos ingressos, inclui também uma lojinha com produtos adicionais para complementar a experiência do usuário. Todo o sistema é integrado a um banco de dados, permitindo registrar qual usuário comprou cada ingresso, controlar estoque, manter histórico de pedidos e organizar todas as informações de forma segura. A parte mais trabalhosa foi estruturar a relação entre usuários, eventos e compras no banco de dados, além de implementar toda a lógica das páginas, rotas, autenticação e telas de compra. No final, o projeto se tornou um site funcional, intuitivo e bem estruturado, atendendo aos requisitos da faculdade e demonstrando minha capacidade de desenvolver aplicações completas e organizadas.",
        "proj4-modal": "Este conjunto de automatizações em Python foi desenvolvido no começo do curso, quando eu estava aprendendo lógica, estruturas básicas e manipulação de dados. Criei pequenos scripts para resolver tarefas repetitivas, organizar arquivos, lidar com planilhas e automatizar processos simples do dia a dia, explorando bibliotecas como os, time e csv. Embora fossem projetos iniciais, ajudaram muito no meu entendimento de fluxos lógicos, funções, tratamento de erros e boas práticas de organização de código. Essas automatizações representaram minha primeira experiência real em transformar código em ferramenta prática.",
        "proj5-modal": "Orkut2 é um site simples que desenvolvi durante uma aula de HTML, criado como um exercício para praticar estruturação de páginas, uso de formulários e manipulação básica de conteúdo. O principal recurso do projeto é um pequeno sistema de postagens, onde o usuário pode escrever uma mensagem e vê-la aparecer na página, simulando de forma bem básica a dinâmica de um feed. Embora seja um projeto pequeno, foi importante para entender melhor como organizar elementos na tela, como trabalhar com inputs e como estruturar uma lógica mínima de exibição de conteúdo, servindo como uma das minhas primeiras experiências práticas com desenvolvimento web.",
        "proj6-modal": "Este projeto é uma versão personalizada do Desktop Goose que desenvolvi em Python utilizando Pygame, criando todas as mecânicas, comportamentos e sprites manualmente. O ganso possui animações completas para andar, correr, agarrar o mouse e interagir com objetos do cenário. Uma das partes mais trabalhosas foi implementar o sistema de perseguição ao ponteiro, fazendo o ganso monitorar a posição do mouse e correr até ele a cada intervalo de tempo antes de executar uma animação especial para arrastá-lo pela tela. Também desenvolvi uma mecânica própria de arbustos que aparecem aleatoriamente e explodem quando o ganso se alinha com o centro deles, exigindo lógica precisa de colisão, sincronização de frames e sprites diferentes para esquerda e direita. Além disso, toda a estrutura de pastas, carregamento de assets, controle de FPS, animações, movimento, estados e interação foi escrita por mim do zero, sempre reescrevendo o código inteiro a cada nova funcionalidade para manter organização e aprendizado. O projeto se tornou um dos mais completos que já fiz, combinando programação, arte digital e lógica de jogo, e serviu como um excelente exercício de estruturação, animação e controle de entidades dentro do Pygame.",
        "footer-copy": "© 2025 Portfólio - Matheus Leite Rodrigues",
        "footer-addr": "Endereço: Rua Manuel Leiroz, 400 - São Paulo - SP - CEP: 03735-180",
        
        // === NOVAS TRADUÇÕES DA JORNADA ===
        "journey-title": "Minha Jornada",
        "journey-subtitle": "Minha Jornada Além do Código: Como a Curiosidade Moldou Minha Carreira Tech.",
        
        "journey-phase1-title": "Curiosido desde pequeno",
        "journey-phase1-text": "Desde criança sempre fui muito curioso com tecnologia. Gostava de explorar o computador e entender como os jogos funcionavam. Ainda novo, cheguei a entrar na plataforma da Unity, onde testava e montava jogos pré-programados.",
        "journey1-memory1": "Primeiros contatos com jogos",
        "journey1-memory2": "Desmontando eletrônicos",
        "journey1-memory3": "Descobrindo a programação",

        "journey-phase2-title": "O Início da Jornada",
        "journey-phase2-text": "Em 2021, comecei o técnico em Programação de Jogos Digitais na FSCAP, onde aprendi lógica, design e o processo de criação de jogos. No ano seguinte, em 2022, comecei a desenvolver meus próprios projetos na Unreal Engine, o que me ajudou a colocar em prática tudo que aprendi. Em 2023 concluí o ensino médio, já decidido a seguir carreira na área de tecnologia.",
        "journey2-memory1": "Lógica de Programação",
        "journey2-memory2": "Design de Jogos",
        "journey2-memory3": "Unreal Engine",

        "journey-phase3-title": "Faculdade e Novas Experiências",
        "journey-phase3-text": "Em 2024 iniciei o curso de Ciência da Computação na UNICID, onde aprofundei meus conhecimentos em estruturas de dados e desenvolvimento de software.",
        "journey-phase3-subtitle": "Também tive a oportunidade de compartilhar conhecimento, ministrando palestras sobre tecnologia para alunos do ensino fundamental.",

        "journey-phase4-title": "Aperfeiçoamento e Foco",
        "journey-phase4-text": "Atualmente, busco evoluir constantemente através de cursos na Alura e estudos independentes. Gosto de aprender novas linguagens e explorar diferentes áreas da computação, sempre com foco em me tornar um profissional completo.",
        "journey4-memory1": "Estudos Contínuos",
        "journey4-memory2": "Novas Tecnologias",
        "journey4-memory3": "Preparação para o Mercado",


        "journey-phase5-title": "Meus planos para o futuro", 
        "journey-phase5-text": "Meu objetivo é seguir crescendo como programador, desenvolvendo projetos que unem criatividade e tecnologia. Quero trabalhar em equipes que incentivem inovação, aprender com profissionais experientes e, no futuro, poder contribuir com soluções que impactem positivamente a vida das pessoas.",
        "journey5-memory1": "Arquitetura em nuvem",
        "journey5-memory2": "IA/ML",
        "journey5-memory3": "Soluções Escaláveis",


        "journey-memories": "Memórias",
        "journey-skills": "Habilidades",
        "journey-focus": "Foco Atual",
        "journey-vision": "Visão Futura"
    },

    "EN": {
        "btn-lang": "EN",
        "hero-title": "Matheus Leite Rodrigues",
        "hero-subtitle": "Developer in Training",
        "about-title": "About Me",
        "about-text": "My name is Matheus, and I am a Computer Science student with a technical background in Digital Game Development. Since an early age, I have been interested in technology and in how programming can transform ideas into real solutions.<br><br> I have experience with programming logic, data modeling, web development, software development, and game development. I also have foundational knowledge in Artificial Intelligence, Machine Learning, and system fundamentals, and I am always looking to learn new tools and programming languages. Currently, I work as a financial assistant, where I have developed strong organizational skills, attention to detail, and proficiency in Excel to optimize processes.<br><br> I am a dedicated, communicative, and curious person, with an easy time learning and adapting to new challenges. I am looking for an internship opportunity in programming to enhance my technical skills, gain practical experience, and contribute with creative and efficient solutions in the technology field.",
        "btn-cvpt": "Download CV (PT)",
        "btn-cven": "Download CV (EN)",
        "tech-title": "Technologies",
        "tools-title": "Tools",
        "contact-title": "Contact",

        // card contato
        "contact-modal-title": "Contact Me",
        "contact-modal-name": "Name",
        "contact-modal-phone": "Phone",
        "contact-modal-email": "Email",
        "contact-modal-reason": "Reason for contact",
        "contact-modal-send": "Send",
        "contact-modal-close": "X",
        "contact-modal-success": "Message sent successfully!",
        "contact-modal-fail": "Failed to send message. Please try again.",
        "contact-modal-enviar": "Sending...",

        // card certificações

        "certs-title": "Certifications",
        "cert1-title": "Coming Soon",
        "cert2-title": "Coming Soon",
        "cert3-title": "Coming Soon",

        "projects-title": "Projects",
        "proj1-title": "MTclicker",
        "proj1-desc": "MTclicker — an autoclicker developed entirely by me, using the JNativeHook library and with all assets designed manually to create a unique interface.",
        "proj2-title": "Gallery Website",
        "proj2-desc": "A special website created to store photos of me and my girlfriend, with a login system using a database, an effect of petals falling when opening the page, and a personalized gallery made by me.",
        "proj3-title": "Ticket sales",
        "proj3-desc": "A ticket sales website developed for a college project, featuring three categories — musicals, university parties, and theater — as well as a small shop, all integrated with a database to register users and purchases.",
        "proj4-title": "Python automations",
        "proj4-desc": "Simple automations developed in Python at the beginning of the course, created to practice programming logic and solve repetitive tasks quickly and efficiently.",
        "proj5-title": "Orkut 2",
        "proj5-desc": "Orkut 2 is a small website created in an HTML class, with a simple posting system to test basic concepts of structure, forms, and content display.",
        "proj6-title": "Desktop Goose",
        "proj6-desc": "A custom Desktop Goose developed by me in Python with Pygame, using my own sprites, mouse-chasing mechanics, an explosive bush system, and various hand-crafted animations.",
        "proj1-modal": "MTclicker is an autoclicker that I developed entirely from scratch, from the core logic to the interface design. One of the biggest challenges was correctly integrating the JNativeHook library, which required specific project configuration, dependency adjustments, and numerous tests until it worked stably. The code was also quite complex, as I needed to handle global events, threads, and precise click control to avoid crashes and unexpected behavior. Furthermore, all of MTclicker's assets were manually designed by me, ensuring a unique and exclusive visual identity. Another important point was the process of transforming the project into a distributable .exe file, which involved packaging, permission adjustments, resource paths, and testing on different machines to ensure compatibility. In the end, with a lot of dedication and your help throughout the process, I managed to deliver MTclicker as a complete, functional software with its own unique look.",
        "proj2-modal": "This project is a website I developed to bring together photos of myself and my girlfriend in a special way. It has a complete login system integrated with a database, ensuring that only we have access to the gallery. One of the most striking details of the site is the falling petal effect that appears when opening the page, something I implemented in JavaScript to create a more romantic and personalized atmosphere. Beyond the visual aspect, I also organized our entire photo gallery, added special text, and made everything lightweight and intuitive. The process involved managing authentication, structuring the database, creating the particle effect, and organizing the files, resulting in a beautiful, functional website with special emotional significance for me.",
        "proj3-modal": "This project is a complete ticket sales website developed for a college assignment, created with three main categories: musicals, university parties, and plays. In addition to tickets, it also includes a small shop with additional products to complement the user experience. The entire system is integrated with a database, allowing the system to record which user purchased each ticket, control inventory, maintain order history, and organize all information securely. The most laborious part was structuring the relationship between users, events, and purchases in the database, as well as implementing all the logic for the pages, routes, authentication, and purchase screens. In the end, the project became a functional, intuitive, and well-structured website, meeting the college requirements and demonstrating my ability to develop complete and organized applications.",
        "proj4-modal": "This set of Python automations was developed at the beginning of the course, when I was learning logic, basic structures, and data manipulation. I created small scripts to solve repetitive tasks, organize files, handle spreadsheets, and automate simple day-to-day processes, exploring libraries such as os, time, and csv. Although they were initial projects, they greatly helped my understanding of logical flows, functions, error handling, and good code organization practices. These automations represented my first real experience in transforming code into a practical tool.",
        "proj5-modal": "Orkut 2 is a simple website I developed during an HTML class, created as an exercise to practice page structuring, form usage, and basic content manipulation. The project's main feature is a small posting system where users can write a message and see it appear on the page, simulating the dynamics of a feed in a very basic way. Although it's a small project, it was important for better understanding how to organize elements on the screen, how to work with inputs, and how to structure a minimal logic for displaying content, serving as one of my first practical experiences with web development.",
        "proj6-modal": "This project is a customized version of Desktop Goose that I developed in Python using Pygame, using my own sprites, mouse-chasing mechanics, an explosive bush system, and various hand-crafted animations. The goose has complete animations for walking, running, grabbing the mouse, and interacting with objects in the scene. One of the most laborious parts was implementing the pointer tracking system, making the goose monitor the mouse position and run to it at each time interval before executing a special animation to drag it across the screen. I also developed my own mechanic for bushes that appear randomly and explode when the goose aligns with their center, requiring precise collision logic, frame synchronization, and different sprites for left and right. Furthermore, the entire folder structure, asset loading, FPS control, animations, movement, states, and interaction was written by me from scratch, always rewriting the entire code for each new feature to maintain organization and learning. The project became one of the most complete I've ever done, combining programming, digital art, and game logic, and served as an excellent exercise in structuring, animating, and controlling entities within Pygame.",
        "footer-copy": "© 2025 Portfolio - Matheus Leite Rodrigues",
        "footer-addr": "Address: Rua Manuel Leiroz, 400 - São Paulo - SP - CEP: 03735-180",

        // === NOVAS TRADUÇÕES DA JORNADA ===
        
        "journey-title": "My Journey",
        "journey-subtitle": "My Journey Beyond Code: How Curiosity Shaped My Tech Career.",
        
        "journey-phase1-title": "Curious since childhood",
        "journey-phase1-text": "Since childhood I've always been very curious about technology. I enjoyed exploring the computer and understanding how games worked. While still young, I even got into the Unity platform, where I tested and created pre-programmed games.",
        "journey1-memory1": "First contacts with games",
        "journey1-memory2": "Disassembling electronics",
        "journey1-memory3": "Discovering programming",
        
        "journey-phase2-title": "Education: Structured Learning",
        "journey-phase2-text": "In 2021, I started my technical course in Digital Game Programming at FSCAP, where I immersed myself in logic, design, and the creative process. In 2022, I applied this knowledge by developing projects in Unreal Engine.",
        "journey2-memory1": "Programming logic",
        "journey2-memory2": "Game design",
        "journey2-memory3": "Unreal Engine",

        "journey-phase3-title": "College and new experiences", 
        "journey-phase3-text": "In 2024, I began studying Computer Science at UNICID, where I deepened my knowledge of data structures and software development. I also participated in outreach projects, including a lecture for elementary school students about technology.",
        "journey-phase3-subtitle": "I also had the opportunity to share knowledge by giving lectures on technology to elementary school students.",
        
        "journey-phase4-title": "Improvement and Focus",
        "journey-phase4-text": "Currently, I am constantly seeking to improve myself through courses on Alura and independent study. I enjoy learning new languages ​​and exploring different areas of computing, always focused on becoming a well-rounded professional.",
        "journey4-memory1": "Continuous studies",
        "journey4-memory2": "New technologies",
        "journey4-memory3": "Market preparation",


        "journey-phase5-title": "My plans for the future",
        "journey-phase5-text": "My goal is to continue growing as a programmer, developing projects that combine creativity and technology. I want to work in teams that encourage innovation, learn from experienced professionals, and in the future, be able to contribute with solutions that positively impact people's lives.",
        "journey5-memory1": "Cloud Architecture",
        "journey5-memory2": "IA/ML",
        "journey5-memory3": "Scalable Solutions",

        "journey-memories": "Memories", 
        "journey-skills": "Skills",
        "journey-focus": "Current Focus",
        "journey-vision": "Future Vision"
    }
};

// ===== DADOS DOS PROJETOS (SÓ IMAGENS) =====
const projetosData = {
    1: {
        imagem: "assets/projetos/projeto1/java4.png",
        galeria: [
            "assets/projetos/projeto1/java1.png",
            "assets/projetos/projeto1/java2.png",
            "assets/projetos/projeto1/java3.png",
            "assets/projetos/projeto1/java4.png"
        ]
    },
    2: {
        imagem: "assets/projetos/projeto2/html1.png",
        galeria: [
            "assets/projetos/projeto2/html1.png",
            "assets/projetos/projeto2/html2.png",
            "assets/projetos/projeto2/html3.png"
        ]
    },
    3: {
        imagem: "assets/projetos/projeto3/php7.png",
        galeria: [
            "assets/projetos/projeto3/php1.png",
            "assets/projetos/projeto3/php2.png",
            "assets/projetos/projeto3/php3.png",
            "assets/projetos/projeto3/php4.png",
            "assets/projetos/projeto3/php5.png",
            "assets/projetos/projeto3/php6.png",
            "assets/projetos/projeto3/php7.png"
        ]
    },
    4: {
        imagem: "assets/projetos/projeto4/python1.png",
        galeria: [
            "assets/projetos/projeto4/python1.png",
            "assets/projetos/projeto4/python2.png",
            "assets/projetos/projeto4/python3.png"
        ]
    },
    5: {
        imagem: "assets/projetos/projeto5/orkut2.png",
        galeria: [
            "assets/projetos/projeto5/orkut1.png",
            "assets/projetos/projeto5/orkut2.png"
        ]
    },
    6: {
        imagem: "assets/projetos/projeto6/pato10.png",
        galeria: [
            "assets/projetos/projeto6/pato1.png",
            "assets/projetos/projeto6/pato2.png",
            "assets/projetos/projeto6/pato3.png",
            "assets/projetos/projeto6/pato4.png",
            "assets/projetos/projeto6/pato5.png",
            "assets/projetos/projeto6/pato6.png",
            "assets/projetos/projeto6/pato7.jpg",
            "assets/projetos/projeto6/pato8.jpg",
            "assets/projetos/projeto6/pato9.jpg",
            "assets/projetos/projeto6/pato10.png"
        ]
    }
};

// ===== FUNÇÃO PARA ABRIR MODAL (PROJETOS) =====
function abrirModal(projetoId) {
    const id = parseInt(projetoId);
    const projeto = projetosData[id];

    if (!projeto) {
        console.error("❌ Projeto não encontrado:", id);
        return;
    }

    const modal = document.getElementById('modal-projeto');
    const modalImagem = document.getElementById('modal-imagem');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDescricao = document.getElementById('modal-descricao');
    const modalGaleria = document.getElementById('modal-galeria');

    // AVISO: A verificação abaixo falhava porque os elementos do modal não estavam no seu HTML!
    if (!modal || !modalImagem || !modalTitulo || !modalDescricao || !modalGaleria) {
        console.error("❌ Elementos do modal não encontrados! (Verifique se o bloco #modal-projeto está no seu HTML)");
        return;
    }

    // Define imagem principal
    modalImagem.src = projeto.imagem;
    modalImagem.alt = translations[currentLang][`proj${id}-title`] || "Projeto";

    // Define título e descrição usando traduções
    modalTitulo.textContent = translations[currentLang][`proj${id}-title`] || "Título do Projeto";
    modalDescricao.innerHTML = translations[currentLang][`proj${id}-modal`] || "Descrição do projeto";

    // Preenche galeria
    modalGaleria.innerHTML = '';
    projeto.galeria.forEach((imagemSrc, index) => {
        const img = document.createElement('img');
        img.src = imagemSrc;
        img.alt = `${translations[currentLang][`proj${id}-title`]} - Imagem ${index + 1}`;
        img.onclick = () => {
            modalImagem.src = imagemSrc;
        };
        modalGaleria.appendChild(img);
    });

    // Salva qual projeto está aberto
    window.projetoModalAberto = id;

    // Abre modal
    modal.classList.add('active');
    document.body.classList.add('body-blur');
}

// ===== FUNÇÃO PARA FECHAR MODAL (PROJETOS) =====
function fecharModal() {
    const modal = document.getElementById('modal-projeto');
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('body-blur');
        window.projetoModalAberto = null;
    }
}

// ===== FUNÇÃO PARA INICIALIZAR PROJETOS =====
function inicializarProjetos() {
    document.querySelectorAll('.projeto-card').forEach(card => {
        card.addEventListener('click', () => {
            const projetoId = card.getAttribute('data-projeto');
            abrirModal(projetoId);
        });
    });

    // Listener para fechar o modal ao clicar no botão 'X' dentro dele
    const fecharModalBtn = document.querySelector('#modal-projeto .fechar-modal');
    if (fecharModalBtn) {
        fecharModalBtn.addEventListener('click', fecharModal);
    }

    // Listener para fechar o modal ao clicar fora da caixa de conteúdo
    const modalProjeto = document.getElementById('modal-projeto');
    if (modalProjeto) {
        modalProjeto.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                fecharModal();
            }
        });
    }

    // Listener para fechar ao apertar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            fecharModal();
        }
    });
}

// ===== FUNÇÃO PARA TROCAR IDIOMA =====
function trocarIdioma() {
    currentLang = (currentLang === "PT") ? "EN" : "PT";
    
    const langBtn = document.getElementById("lang-btn");
    langBtn.textContent = translations[currentLang]["btn-lang"];

    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-lang");
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });

    // Atualiza modal de projetos se estiver aberto
    const modal = document.getElementById('modal-projeto');
    if (modal && modal.classList.contains('active') && window.projetoModalAberto) {
        abrirModal(window.projetoModalAberto);
    }
}

// ===== FUNÇÃO PARA TROCAR TEMA =====
function toggleTheme() {
    const themeIcon = document.getElementById('theme-icon');
    const isDark = document.body.classList.contains('dark-mode');

    if (isDark) {
        document.body.classList.remove('dark-mode');
        themeIcon.src = 'assets/sol.svg';
        localStorage.setItem('portfolio-theme', 'light');
    } else {
        document.body.classList.add('dark-mode');
        themeIcon.src = 'assets/lua.svg';
        localStorage.setItem('portfolio-theme', 'dark');
    }
}

// ===== FUNÇÃO PARA CARREGAR TEMA =====
function loadTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = savedTheme || systemTheme;

    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) themeIcon.src = 'assets/lua.svg';
    } else {
        document.body.classList.remove('dark-mode');
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) themeIcon.src = 'assets/sol.svg';
    }
}

// Listener para o campo de telefone (garantir que só haja números)
document.addEventListener('DOMContentLoaded', () => {
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function (e) {
            this.value = this.value.replace(/\D/g, '');
        });
    }
});


// ===== FUNÇÃO PARA INICIAR MARQUEE =====
function startMarquee() {
    const marquees = document.querySelectorAll('.marquee-content');
    marquees.forEach((marquee) => {
        marquee.style.animation = 'none';
        let position = 0;

        const getResponsiveSpeed = () => {
            const width = window.innerWidth;
            if (width > 1920) return 2.2;
            if (width > 1440) return 2.0;
            if (width > 1024) return 1.8;
            if (width > 768) return 1.5;
            if (width > 480) return 1.3;
            return 1.0;
        };

        let speed = getResponsiveSpeed();

        // Cálculo da largura de uma única cópia do conteúdo
        let singleCopyWidth = 0;
        const itemsPerCopy = marquee.children.length / 3;
        for (let i = 0; i < itemsPerCopy; i++) {
            if (marquee.children[i]) {
                const item = marquee.children[i];
                // 20px é uma estimativa do gap/margin entre os itens
                singleCopyWidth += item.offsetWidth + 20; 
            }
        }

        function animate() {
            position -= speed;
            if (position <= -singleCopyWidth) {
                position = 0;
            }
            marquee.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener('resize', () => {
            speed = getResponsiveSpeed();
        });
    });
}

// ===== INICIALIZAÇÃO GERAL DO DOCUMENTO =====
document.addEventListener("DOMContentLoaded", () => {
    // 1. Carrega tema salvo e outras inits
    loadTheme();
    inicializarCertificados();
    inicializarProjetos(); // AGORA ENCONTRA O MODAL NO HTML
    startMarquee();

    // 2. Configura Botões de Tema e Idioma
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.addEventListener('click', trocarIdioma);

    // 3. Lógica do Modal de Contato
    const modalContato = document.getElementById('modal-contato');
    const btnAbrirContato = document.getElementById('abrir-modal-contato');
    const btnFecharContato = document.getElementById('fechar-modal-contato');
    const formContato = document.getElementById('form-contato');

    // Abrir Modal de Contato
    if (btnAbrirContato && modalContato) {
        btnAbrirContato.addEventListener('click', (e) => {
            e.preventDefault();
            modalContato.classList.add('active');
        });
    }

    // Fechar Modal de Contato (botão X)
    if (btnFecharContato && modalContato) {
        btnFecharContato.addEventListener('click', () => {
            modalContato.classList.remove('active');
            // Resetar feedback após fechar
            const feedback = document.getElementById('contato-feedback');
            if (feedback) feedback.style.display = 'none';
        });
    }

    // Fechar Modal de Contato (clicar fora)
    if (modalContato) {
        modalContato.addEventListener('click', (e) => {
            if (e.target === modalContato) {
                modalContato.classList.remove('active');
                 // Resetar feedback após fechar
                const feedback = document.getElementById('contato-feedback');
                if (feedback) feedback.style.display = 'none';
            }
        });
    }

    // ===== ENVIO DO FORMULÁRIO PARA O SUPABASE (LÓGICA FINAL) =====
    if (formContato && supabase) {
        formContato.addEventListener('submit', async (e) => {
            e.preventDefault(); // Impede a página de recarregar

            const feedback = document.getElementById('contato-feedback');
            const spinner = document.getElementById('contato-spinner');
            const text = document.getElementById('contato-feedback-text');
            
            // 1. Mostra feedback visual ("Enviando...")
            if(feedback) {
                feedback.style.display = 'block';
                spinner.style.display = 'inline-block';
                text.textContent = translations[currentLang]["contact-modal-enviar"];
                text.style.color = "var(--cor-primaria-escura)";
            }

            // 2. Pega os dados dos inputs
            const dadosParaEnviar = {
                nome: document.getElementById('contato-nome').value,
                telefone: document.getElementById('telefone').value,
                email: document.getElementById('contato-email').value,
                motivo: document.getElementById('contato-motivo').value,
            };

            try {
                // 3. Envia para a tabela 'contatos'
                const { data, error } = await supabase
                    .from('contatos') 
                    .insert([ dadosParaEnviar ]);

                if (error) throw error;

                // 4. Sucesso!
                spinner.style.display = 'none';
                text.textContent = translations[currentLang]["contact-modal-success"];
                
                // Limpa o formulário
                formContato.reset();

                // Fecha modal automaticamente após 2 segundos
                setTimeout(() => {
                    modalContato.classList.remove('active');
                    feedback.style.display = 'none';
                }, 2000);

            } catch (error) {
                // 5. Tratamento de Erro
                console.error('Erro ao enviar:', error);
                spinner.style.display = 'none';
                
                // Aviso de RLS no console
                if (error.code === "42501") {
                   console.warn("Parece ser erro de permissão (RLS). Verifique se você rodou o SQL de política pública no Supabase.");
                }

                text.textContent = translations[currentLang]["contact-modal-fail"];
                text.style.color = "red";
            }
        });
    }
});

// ===== DADOS DOS CERTIFICADOS =====
const certificadosData = {
    1: {
        imagem: "assets/certificados/certificado.jpg"
    },
    2: {
        imagem: "assets/certificados/certificado.jpg"
    },
    3: {
        imagem: "assets/certificados/certificado.jpg"
    }
};

// ===== FUNÇÃO PARA ABRIR MODAL (CERTIFICADOS) =====
function abrirModalCert(certId) {
    const id = parseInt(certId);
    const cert = certificadosData[id];
    
    if (!cert) {
        console.error("❌ Certificado não encontrado:", id);
        return;
    }

    const modal = document.getElementById('modal-cert');
    const modalImagem = document.getElementById('modal-cert-imagem');

    if (!modal || !modalImagem) {
        console.error("❌ Elementos do modal de certificado não encontrados!");
        return;
    }

    modalImagem.src = cert.imagem;
    modalImagem.alt = `Certificado ${id}`;

    modal.classList.add('active');
    document.body.classList.add('body-blur');
}

// ===== FUNÇÃO PARA FECHAR MODAL (CERTIFICADOS) =====
function fecharModalCert() {
    const modal = document.getElementById('modal-cert');
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('body-blur');
    }
}

// ===== FUNÇÃO PARA INICIALIZAR CERTIFICADOS =====
function inicializarCertificados() {
    document.querySelectorAll('.cert-card').forEach(card => {
        card.addEventListener('click', () => {
            const certId = card.getAttribute('data-cert');
            abrirModalCert(certId);
        });
    });

    // Fechar ao clicar no X
    const fecharBtn = document.querySelector('#modal-cert .fechar-modal');
    if (fecharBtn) {
        fecharBtn.addEventListener('click', fecharModalCert);
    }

    // Fechar ao clicar fora
    const modalCert = document.getElementById('modal-cert');
    if (modalCert) {
        modalCert.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                fecharModalCert();
            }
        });
    }

    // Fechar ao apertar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            fecharModalCert();
        }
    });
}