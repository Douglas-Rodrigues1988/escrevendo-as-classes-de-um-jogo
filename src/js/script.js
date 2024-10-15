// script.js
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

// Criando instâncias da classe Heroi
const heroi1 = new Heroi('Gandalf', 150, 'mago');
const heroi2 = new Heroi('Aragorn', 87, 'guerreiro');
const heroi3 = new Heroi('Li Mu Bai', 30, 'monge');
const heroi4 = new Heroi('Naruto', 16, 'ninja');

// Função para exibir os heróis na página
function exibirHerois() {
    const heroisDiv = document.getElementById('herois');
    const herois = [heroi1, heroi2, heroi3, heroi4];

    herois.forEach(heroi => {
        const heroiDiv = document.createElement('div');
        heroiDiv.className = 'heroi';
        heroiDiv.innerHTML = `<h2>${heroi.nome}</h2><p>Idade: ${heroi.idade}</p><p>Tipo: ${heroi.tipo}</p>`;
        heroisDiv.appendChild(heroiDiv);
    });
}

// Adiciona evento ao botão para atacar
document.getElementById('atacarBtn').addEventListener('click', () => {
    const mensagensDiv = document.getElementById('mensagens');
    mensagensDiv.innerHTML = ''; // Limpa as mensagens anteriores

    mensagensDiv.innerHTML += `<p class="atacar-msg">${heroi1.atacar()}</p>`;
    mensagensDiv.innerHTML += `<p class="atacar-msg">${heroi2.atacar()}</p>`;
    mensagensDiv.innerHTML += `<p class="atacar-msg">${heroi3.atacar()}</p>`;
    mensagensDiv.innerHTML += `<p class="atacar-msg">${heroi4.atacar()}</p>`;
});

// Exibir os heróis ao carregar a página
exibirHerois();
