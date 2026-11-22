const dados = {
    inicioAmizade: "2023-09-02T11:28:00-03:00",
    aniversario: { mes: 6, dia: 12 },

    itapema: { lat: -27.09, lon: -48.61 },
    porto: { lat: 41.15, lon: -8.61 },

    contato: {
        accessKey: "7a4705ba-3aaa-41c3-9b19-cb8a3c3294e3"
    },

    spotifyEmbed: "",

    playlist: [
        { titulo: "Change (In the House of Flies)", artista: "Deftones" },
        { titulo: "Digital Bath", artista: "Deftones" },
        { titulo: "Cherry Waves", artista: "Deftones" },
        { titulo: "Be Quiet and Drive (Far Away)", artista: "Deftones" }
    ],

    apelidos: [
        {
            nome: "Portuguita",
            sig: "A junção do Doce Tortuguita + Portuguesa. Uma tartaruguinha fofa que veio direto do Porto. 🐢"
        },
        {
            nome: "Portuguesa",
            sig: "Porque você carrega Portugal com muito orgulho, e porque o seu sotaque é um charme à parte."
        },
        {
            nome: "Joana D'Arc",
            sig: "Heroína, guerreira e cheia de coragem. Eu sou muito criativo, né? 🔥"
        }
    ],

    timeline: [
        { data: "02/09/2023", titulo: "Onde tudo começou", texto: "Nos conhecemos no servidor Anime's Zero, no Discord. Ninguém imaginava onde isso ia dar." },
        { data: "05/04/2025", titulo: "Primeira call", texto: "Pensa o quao nervoso eu estava quando fomos call kkkk" },
        { data: "02/12/2023", titulo: "Um momento marcante", texto: "A gente encasquetando o Rossi KKKKKK" },
        { data: "12/06", titulo: "Aniversário 🎂", texto: "Dia dos Namorados no Brasil, e dia da Portuguita no mundo todo." }
    ],

    motivos: [
        { emoji: "🐢", texto: "Você é fofa sem ser irritante, e isso é raríssimo." },
        { emoji: "🖤", texto: "Ter bom gosto musical: Deftones e Nirvana, respeito." },
        { emoji: "🔥", texto: "Você é a minha Joana D'Arc: corajosa do jeito que só você sabe ser." },
        { emoji: "🌍", texto: "Mesmo com um oceano no meio, você sempre faz a distância parecer pequena." },
        { emoji: "🌸", texto: "Ter aparecido naquele servidor de anime e mudado a minha internet." },
        { emoji: "✨", texto: "Você é uma das únicas pessoas nessa vida por quem eu faria tudo." }
    ],

    perguntas: [
        "Se a gente pudesse se encontrar amanhã, o que a gente fazia primeiro?",
        "Qual música você ouviria no repeat pelo resto da vida?",
        "Qual foi o momento mais engraçado das nossas conversas?",
        "Se você fosse uma tartaruga, qual seria o nome da sua tartaruga?",
        "Qual lugar do mundo você quer conhecer um dia?",
        "Qual anime nunca sai da sua cabeça?",
        "O que te faz sorrir mesmo nos dias ruins?",
        "Qual é o seu lanche favorito de madrugada?",
        "Se você pudesse ter um superpoder, qual seria?",
        "Qual o seu lugar favorito do Porto?"
    ],

    carta:
`Portuguita,

“O sal das minhas lágrimas de amor
Criou o mar que existe entre nós dois
Para nos unir e separar.”

Há 56 anos, em 1970, Vinicius de Moraes escrevia esses versos, que parecem traduzir a contradição de um oceano: ao mesmo tempo que separa, também une. O mar que existe entre duas pessoas pode ser imenso, mas nem sempre é suficiente para impedir que elas se encontrem.

E faço dessas palavras as minhas.

O mesmo mar que nos separa por milhares de quilômetros, com toda a sua imensidão e suas águas salgadas, é também aquele que, de alguma forma, me permitiu encontrar você. Afinal, apesar de toda essa distância geográfica, temos algo que nos aproxima: a mesma língua, que nos permite compartilhar ideias, histórias, risadas e tantas outras coisas que, talvez, jamais compartilhássemos se tivéssemos nascido em lugares diferentes.

Dizem também que a distância leva ao esquecimento, mas eu não concordo muito com isso. Existem pessoas que, mesmo estando longe, fazem-se presentes de maneiras que muita gente, estando perto, jamais conseguiria.

Você sempre foi, continua sendo e espero que por muito tempo ainda seja o meu maior tesouro extraterritorial.

E pensar que tudo isso começou em um servidor de anime. KKKKKKKKK`
};

function atualizarRelogios() {
    const agora = new Date();
    const opts = { hour: '2-digit', minute: '2-digit' };

    document.getElementById('relogio-br').innerText =
        agora.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', ...opts });

    document.getElementById('relogio-pt').innerText =
        agora.toLocaleTimeString('pt-PT', { timeZone: 'Europe/Lisbon', ...opts });

    const horaPT = parseInt(
        agora.toLocaleTimeString('pt-PT', { timeZone: 'Europe/Lisbon', hour: '2-digit', hour12: false }), 10
    );
    let saudacao = "Boa noite";
    if (horaPT < 6) saudacao = "Boa madrugada";
    else if (horaPT < 12) saudacao = "Bom dia";
    else if (horaPT < 19) saudacao = "Boa tarde";

    document.getElementById('saudacao').innerText =
        `${saudacao}, Portuguita! Aí no Porto já são ${agora.toLocaleTimeString('pt-PT', { timeZone: 'Europe/Lisbon', ...opts })} 🐢`;
}

function atualizarContador() {
    const inicio = new Date(dados.inicioAmizade);
    const diff = Date.now() - inicio.getTime();

    const dias = Math.floor(diff / 86400000);
    const horas = Math.floor(diff / 3600000);
    const minutos = Math.floor(diff / 60000);
    const segundos = Math.floor(diff / 1000);

    document.getElementById('dias-amizade').innerText = dias.toLocaleString('pt-BR');
    document.getElementById('c-horas').innerText = horas.toLocaleString('pt-BR');
    document.getElementById('c-min').innerText = minutos.toLocaleString('pt-BR');
    document.getElementById('c-seg').innerText = segundos.toLocaleString('pt-BR');
}

function atualizarAniversario() {
    const agora = new Date();
    const { mes, dia } = dados.aniversario;
    const mm = String(mes).padStart(2, '0');
    const dd = String(dia).padStart(2, '0');

    let ano = agora.getFullYear();
    let alvo = new Date(`${ano}-${mm}-${dd}T00:00:00+01:00`);

    const fimDoDia = new Date(alvo.getTime() + 86400000);
    if (agora >= alvo && agora < fimDoDia) {
        document.getElementById('aniv-dias').innerText = "🎉";
        document.getElementById('aniv-texto').innerText = "HOJE É O DIA DA PORTUGUITA!";
        document.getElementById('aniv-sub').innerText = "Parabéns, Joana D'Arc! Que seja um dia lindo. 🎂";
        return;
    }
    if (agora >= fimDoDia) {
        ano += 1;
        alvo = new Date(`${ano}-${mm}-${dd}T00:00:00+01:00`);
    }

    const diff = alvo - agora;
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);

    document.getElementById('aniv-dias').innerText = d;
    document.getElementById('aniv-texto').innerText = "dias para 12 de junho";
    document.getElementById('aniv-sub').innerText = `Faltam ${d} dias, ${h}h e ${m}min. Já pode ir pensando no presente! 🎁`;
}

function calcularDistancia(a, b) {
    const R = 6371;
    const rad = x => x * Math.PI / 180;
    const dLat = rad(b.lat - a.lat);
    const dLon = rad(b.lon - a.lon);
    const h = Math.sin(dLat / 2) ** 2 +
              Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2;
    return Math.round(2 * R * Math.asin(Math.sqrt(h)));
}

function carregarPlaylist() {
    const el = document.getElementById('playlist');
    el.innerHTML = "";
    dados.playlist.forEach(faixa => {
        const link = document.createElement('a');
        link.className = 'faixa';
        link.target = '_blank';
        link.rel = 'noopener';
        link.href = 'https://open.spotify.com/search/' + encodeURIComponent(`${faixa.artista} ${faixa.titulo}`);
        link.innerHTML = `
            <div>
                <h4>${faixa.titulo}</h4>
                <p>${faixa.artista}</p>
            </div>
            <div class="play">▶</div>
        `;
        el.appendChild(link);
    });

    if (dados.spotifyEmbed) {
        document.getElementById('playerEmbed').innerHTML =
            `<iframe src="${dados.spotifyEmbed}" height="152" allow="encrypted-media" loading="lazy"></iframe>`;
    }
}

function carregarApelidos() {
    const el = document.getElementById('apelidos');
    el.innerHTML = dados.apelidos.map(a => `
        <div class="apelido">
            <h4>${a.nome}</h4>
            <p>${a.sig}</p>
        </div>
    `).join('');
}

function carregarTimeline() {
    const el = document.getElementById('timeline');
    el.innerHTML = dados.timeline.map(e => `
        <div class="evento">
            <span class="data">${e.data}</span>
            <h4>${e.titulo}</h4>
            <p>${e.texto}</p>
        </div>
    `).join('');
}

function carregarMotivos() {
    const el = document.getElementById('motivos');
    el.innerHTML = "";
    dados.motivos.forEach((m, i) => {
        const card = document.createElement('div');
        card.className = 'motivo';
        card.innerHTML = `
            <div class="motivo-inner">
                <div class="motivo-frente">
                    <span class="emoji">${m.emoji}</span>
                    <small>Motivo #${i + 1}</small>
                </div>
                <div class="motivo-verso">${m.texto}</div>
            </div>
        `;
        card.addEventListener('click', () => card.classList.toggle('virado'));
        el.appendChild(card);
    });
}

let ultimaPergunta = -1;
document.getElementById('btnPergunta').addEventListener('click', () => {
    let i;
    do { i = Math.floor(Math.random() * dados.perguntas.length); }
    while (i === ultimaPergunta && dados.perguntas.length > 1);
    ultimaPergunta = i;
    document.getElementById('pergunta').innerText = dados.perguntas[i];
});

let digitando = false;
let timerCarta;
document.getElementById('btnCarta').addEventListener('click', function () {
    if (digitando) return;
    digitando = true;
    this.style.display = 'none';

    const el = document.getElementById('carta');
    el.innerText = "";
    let i = 0;

    timerCarta = setInterval(() => {
        el.innerText += dados.carta[i];
        i++;
        if (i >= dados.carta.length) clearInterval(timerCarta);
    }, 20);

    el.addEventListener('click', () => {
        clearInterval(timerCarta);
        el.innerText = dados.carta;
    });
});

function soltarCoracoes(x, y) {
    const emojis = ["🧡", "🖤", "❤️", "🐢", "✨"];
    for (let i = 0; i < 10; i++) {
        const c = document.createElement('span');
        c.className = 'coracao';
        c.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        c.style.left = x + 'px';
        c.style.top = y + 'px';
        c.style.setProperty('--dx', (Math.random() * 160 - 80) + 'px');
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 1400);
    }
}

function mostrarToast(texto) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerText = texto;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => {
        t.classList.remove('show');
        setTimeout(() => t.remove(), 400);
    }, 3500);
}

document.getElementById('tartaruga').addEventListener('click', e => {
    soltarCoracoes(e.clientX, e.clientY);
});

let cliquesTitulo = 0;
document.getElementById('titulo').addEventListener('click', () => {
    cliquesTitulo++;
    if (cliquesTitulo === 5) {
        mostrarToast("🔥 Joana D'Arc detectada! Você achou o segredo. Eu sabia que você ia clicar. 🐢");
        cliquesTitulo = 0;
    }
});

const formRecado = document.getElementById('formRecado');
const statusRecado = document.getElementById('statusRecado');
const btnEnviar = document.getElementById('btnEnviar');

formRecado.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusRecado.className = 'status-recado';

    const chave = dados.contato.accessKey;
    if (!chave || chave.startsWith('COLE_')) {
        statusRecado.classList.add('erro');
        statusRecado.innerText = "O envio ainda não foi configurado (falta a chave no script.js).";
        return;
    }

    const nome = formRecado.elements['nome'].value.trim() || "Portuguita";
    const mensagem = formRecado.elements['mensagem'].value.trim();
    if (!mensagem) return;

    btnEnviar.disabled = true;
    btnEnviar.innerText = "Enviando...";
    statusRecado.innerText = "";

    try {
        const resposta = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                access_key: chave,
                subject: '💌 Recado da Portuguita (site)',
                from_name: 'Site da Portuguita',
                name: nome,
                message: mensagem,
                botcheck: formRecado.elements['botcheck'].checked
            })
        });
        const resultado = await resposta.json();

        if (resultado.success) {
            statusRecado.classList.add('ok');
            statusRecado.innerText = "Recado enviado! Chegou direitinho do outro lado do Atlântico. 🐢";
            formRecado.reset();
            const r = btnEnviar.getBoundingClientRect();
            soltarCoracoes(r.left + r.width / 2, r.top);
        } else {
            throw new Error(resultado.message || "Falha no envio");
        }
    } catch (erro) {
        statusRecado.classList.add('erro');
        statusRecado.innerText = "Ops, não consegui enviar. Tenta de novo daqui a pouco? 🥺";
    } finally {
        btnEnviar.disabled = false;
        btnEnviar.innerText = "Enviar recado 🐢";
    }
});

function criarBrasas() {
    const el = document.getElementById('embers');
    for (let i = 0; i < 22; i++) {
        const b = document.createElement('span');
        b.className = 'ember';
        const tam = Math.random() * 4 + 2;
        b.style.width = b.style.height = tam + 'px';
        b.style.left = Math.random() * 100 + '%';
        b.style.animationDuration = (Math.random() * 10 + 8) + 's';
        b.style.animationDelay = (Math.random() * 10) + 's';
        el.appendChild(b);
    }
}

function iniciarReveal() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

document.getElementById('distancia').innerText =
    calcularDistancia(dados.itapema, dados.porto).toLocaleString('pt-BR');

carregarPlaylist();
carregarApelidos();
carregarTimeline();
carregarMotivos();
criarBrasas();
iniciarReveal();

atualizarRelogios();
atualizarContador();
atualizarAniversario();
setInterval(() => {
    atualizarRelogios();
    atualizarContador();
    atualizarAniversario();
}, 1000);