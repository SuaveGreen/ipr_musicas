import React, { useState } from 'react';
import { Musica } from './musica';
import { ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft, Frown, ArrowDownUp, AArrowUp, ListOrdered } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { SaveMusic } from './saveMusic';

interface MusicaItem {
  id: number;
  musica: string;
  cantor: string;
  linkYoutube: string;
}

const items: MusicaItem[] = [

{id: 1, musica: 'Tá decidido', cantor: 'Hebrom Ministério Fortaleza de Adoração', linkYoutube: 'https://youtu.be/VekDvBDAPAw'},

{id: 2, musica: 'Quero tanto agradecer', cantor: 'Vineyard', linkYoutube: 'https://youtu.be/PyBybbxT5cY'},

{id: 3, musica: 'Deus do Impossível', cantor: 'Toque no altar', linkYoutube: 'https://youtu.be/Apot7wbsO1o'},

{id: 4, musica: 'Perdão e graça', cantor: 'Vineyard', linkYoutube: 'https://youtu.be/WbM6V41gcqk'},

{id: 5, musica: 'Quanto Amor', cantor: 'Voz da verdade', linkYoutube: 'https://youtu.be/2efkucvsAYo'},

{id: 6, musica: 'Oh! Por que duvidar?', cantor: 'Hinário Aleluia', linkYoutube: 'https://youtu.be/e1EScpzUqSE'},

{id: 7, musica: 'Chuva de poder', cantor: 'Eyshila', linkYoutube: 'https://youtu.be/cWovy08GhSY'},

{id: 8, musica: 'Jesus meu guia é', cantor: 'Raiz Coral', linkYoutube: 'https://youtu.be/LDteyOatCmA'},

{id: 9, musica: 'Descansarei', cantor: 'Etiane Pires', linkYoutube: 'https://youtu.be/DQVf2tQp1Ec'},

{id: 10, musica: 'Tenho fome', cantor: 'Renascer Praise', linkYoutube: 'https://youtu.be/r6t2yEPmlpw'},

{id: 11, musica: 'Eu te quero Senhor', cantor: '', linkYoutube: ''},

{id: 12, musica: 'Fogo de Deus', cantor: 'Adoração e Adoradores', linkYoutube: 'https://youtu.be/2uuni7Qlzdk'},

{id: 13, musica: 'Deus enviou', cantor: 'Harpa Cristã', linkYoutube: 'https://youtu.be/Mwkb5To-4M0'},

{id: 14, musica: 'Diante de Ti', cantor: 'Quatro por um', linkYoutube: 'https://youtu.be/DYF1KjjjgGY'},

{id: 15, musica: 'Rendição', cantor: 'Ministério Hebrom', linkYoutube: 'https://youtu.be/7vjZC6YwVjs'},

{id: 16, musica: 'Eu Te louvarei, meu bom Jesus', cantor: 'Ronaldo Bezerra', linkYoutube: 'https://youtu.be/dTLOdnCG1dA'},

{id: 17, musica: 'Bom estarmos aqui', cantor: 'Renascer Praise', linkYoutube: 'https://youtu.be/ukcvrrzfJFU'},

{id: 18, musica: 'Dê-nos Mãos Limpas', cantor: 'Filhos do Homem', linkYoutube: 'https://youtu.be/VJpN2zCMYoE'},

{id: 19, musica: 'Senho Te quero', cantor: 'David Quinlan', linkYoutube: 'https://youtu.be/6dhtnEb3_NQ'},

{id: 20, musica: 'Poder para salvar', cantor: 'Aline Barros', linkYoutube: 'https://youtu.be/gDH0tT730UA'},

{id: 21, musica: 'Lança sobre mim', cantor: '', linkYoutube: ''},

{id: 22, musica: 'A cura', cantor: 'Cassiane', linkYoutube: 'https://youtu.be/AVDgeemuSXg'},

{id: 23, musica: 'O som da chuva', cantor: 'Ellas', linkYoutube: 'https://youtu.be/JUH0-Bpjyno'},

{id: 24, musica: 'Vem esta a hora', cantor: 'Vineyard', linkYoutube: 'https://youtu.be/RltQ4USrWoA'},

{id: 25, musica: 'Jesus Te entronizamos', cantor: 'Marcos Góes', linkYoutube: 'https://youtu.be/rpBCO9Ck4nA?si=Fq2_r9w5_rFMRcJm'},

{id: 26, musica: 'Grande é o Senhor', cantor: 'Adhemar de Campos', linkYoutube: 'https://youtu.be/4_rv9Jmgc78'},

{id: 27, musica: 'O Nosso General É Cristo', cantor: 'Adhemar de Campos', linkYoutube: 'https://youtu.be/dS35Xhf2UeI'},

{id: 28, musica: 'Adoração', cantor: '', linkYoutube: ''},

{id: 29, musica: 'Santo, Santo, Santo', cantor: 'Renascer Praise', linkYoutube: 'https://youtu.be/ZyXFj5yKOIM'},

{id: 30, musica: 'Vento do Espírito', cantor: 'Bruna Karla', linkYoutube: 'https://youtu.be/IY10nQn14KM'},

{id: 31, musica: 'Deixe-me tocar', cantor: 'Ministério Fonte de Água Viva', linkYoutube: 'https://youtu.be/skevizq-QlI'},

{id: 32, musica: 'Meu coração', cantor: 'Diante do Trono', linkYoutube: 'https://youtu.be/GrJIGJflsEE'},

{id: 33, musica: 'Vem cear', cantor: 'Harpa Cristã', linkYoutube: ''},

{id: 34, musica: 'Os guerreiros se preparam', cantor: 'Harpa Cristã', linkYoutube: ''},

{id: 35, musica: 'Te dou meu coração', cantor: 'Aline', linkYoutube: 'https://youtu.be/u-eym7Okkyc?si=Unw71uiQiLYJmicP'},

{id: 36, musica: 'Em espírito e em verdade', cantor: 'Harpa Cristã', linkYoutube: 'https://youtu.be/VD37SEtzrT0'},

{id: 37, musica: 'Te louvarei', cantor: 'Davi Sacer', linkYoutube: 'https://youtu.be/1S0NMgqipV4'},

{id: 38, musica: 'Eu quero descer', cantor: 'Nani Azevedo', linkYoutube: 'https://youtu.be/3nYj9FfYAWM'},

{id: 39, musica: 'Me leva onde eu possa ouvir', cantor: 'Filhos do Homem', linkYoutube: 'https://youtu.be/n59BehDmJtc'},

{id: 40, musica: 'A luz do Teu rosto', cantor: '', linkYoutube: ''},

{id: 41, musica: 'Exaltai', cantor: 'Diante do Trono', linkYoutube: ''},

{id: 42, musica: 'Os sonhos de Deus', cantor: 'Damares', linkYoutube: ''},

{id: 43, musica: 'Não morrerei', cantor: 'Fernandinho', linkYoutube: ''},

{id: 44, musica: 'Te amo ó Deus', cantor: '', linkYoutube: ''},

{id: 45, musica: 'Eu navegarei', cantor: 'Aline Barros', linkYoutube: ''},

{id: 46, musica: 'Terremoto', cantor: '', linkYoutube: ''},

{id: 47, musica: 'Te amo tanto', cantor: 'Fernanda Brum', linkYoutube: ''},

{id: 48, musica: 'Ainda que a figueira', cantor: '', linkYoutube: ''},

{id: 49, musica: 'Vem espírito de Deus', cantor: 'André Valadão', linkYoutube: ''},

{id: 50, musica: 'Como é precioso irmão', cantor: '', linkYoutube: ''},

{id: 51, musica: 'Nasci pra Vencer', cantor: '', linkYoutube: ''},

{id: 52, musica: 'Tu que estas assentado', cantor: '', linkYoutube: ''},

{id: 53, musica: 'Rendido estou', cantor: '', linkYoutube: ''},

{id: 54, musica: 'Bem aventurado', cantor: '', linkYoutube: ''},

{id: 55, musica: 'Cantarei teu amor pra sempre', cantor: '', linkYoutube: ''},

{id: 56, musica: 'Junto a ti', cantor: '', linkYoutube: ''},

{id: 57, musica: 'Celebrai com júbilo', cantor: '', linkYoutube: ''},

{id: 58, musica: 'Seja engrandecido', cantor: '', linkYoutube: ''},

{id: 59, musica: 'Alvo mais que a neve', cantor: '', linkYoutube: ''},

{id: 60, musica: 'Conquistando o impossível', cantor: '', linkYoutube: ''},

{id: 61, musica: 'Homem de guerra', cantor: '', linkYoutube: ''},

{id: 62, musica: 'Move as águas', cantor: '', linkYoutube: ''},

{id: 63, musica: 'Uma nova hitória', cantor: '', linkYoutube: ''},

{id: 64, musica: 'Sua presença é real', cantor: '', linkYoutube: ''},

{id: 65, musica: 'Nunca pare de lutar', cantor: '', linkYoutube: ''},

{id: 66, musica: 'Não há Deus maior', cantor: '', linkYoutube: ''},

{id: 67, musica: 'Vitória no deserto', cantor: '', linkYoutube: ''},

{id: 68, musica: 'A alegria', cantor: '', linkYoutube: ''},

{id: 69, musica: 'Além do céu', cantor: '', linkYoutube: ''},

{id: 70, musica: 'Cordas de amor', cantor: '', linkYoutube: ''},

{id: 71, musica: 'Reina em mim', cantor: '', linkYoutube: ''},

{id: 72, musica: 'Oferta de amor', cantor: '', linkYoutube: ''},

{id: 73, musica: 'Jardim da inocência', cantor: '', linkYoutube: ''},

{id: 74, musica: 'Edifica em mim', cantor: '', linkYoutube: ''},

{id: 75, musica: 'Profetizar', cantor: '', linkYoutube: ''},

{id: 76, musica: 'Sonda-me', cantor: '', linkYoutube: ''},

{id: 77, musica: 'Me derramar', cantor: '', linkYoutube: ''},

{id: 78, musica: 'Pelos olhos da fé', cantor: '', linkYoutube: ''},

{id: 79, musica: 'Vinho e pão', cantor: 'Fernanda Brum', linkYoutube: 'https://youtu.be/fqaTkmAeusI?si=d4RWbooEK16DkBfd'},

{id: 80, musica: 'Ao único', cantor: '', linkYoutube: ''},

{id: 81, musica: 'Vim para adorar-te', cantor: '', linkYoutube: ''},

{id: 82, musica: 'Tu és a fonte', cantor: '', linkYoutube: ''},

{id: 83, musica: 'Geração que dança', cantor: '', linkYoutube: ''},

{id: 84, musica: 'Vencedor invicto', cantor: '', linkYoutube: ''},

{id: 85, musica: 'Toda sorte de benção', cantor: '', linkYoutube: ''},

{id: 86, musica: 'Escudo', cantor: '', linkYoutube: ''},

{id: 87, musica: 'Deus é fiel', cantor: '', linkYoutube: ''},

{id: 88, musica: 'Autoridade e poder', cantor: '', linkYoutube: ''},

{id: 89, musica: 'Quem pode livrar', cantor: '', linkYoutube: ''},

{id: 90, musica: 'Última chance', cantor: '', linkYoutube: ''},

{id: 91, musica: 'Em adoração', cantor: '', linkYoutube: ''},

{id: 92, musica: 'Fogo consumidor', cantor: '', linkYoutube: ''},

{id: 93, musica: 'Livre acesso', cantor: '', linkYoutube: ''},

{id: 94, musica: 'Sopre espírito', cantor: '', linkYoutube: ''},

{id: 95, musica: 'Essencia da adoração', cantor: 'David Quinlan', linkYoutube: 'https://youtu.be/ZfOpeP2SMx8?si=BldqoXJHtpuPrfP6'},

{id: 96, musica: 'Aquele que está feliz', cantor: '', linkYoutube: ''},

{id: 97, musica: 'Seja adorado', cantor: '', linkYoutube: ''},

{id: 98, musica: 'Vontade de adorar', cantor: '', linkYoutube: ''},

{id: 99, musica: 'A ele a glória', cantor: '', linkYoutube: ''},

{id: 100, musica: 'Renova meu interior', cantor: '', linkYoutube: ''},

{id: 101, musica: 'Alto preço', cantor: '', linkYoutube: ''},

{id: 102, musica: 'Te adorar', cantor: '', linkYoutube: ''},

{id: 103, musica: 'Caia fogo', cantor: '', linkYoutube: ''},

{id: 104, musica: 'Mostra-me a tua glória', cantor: '', linkYoutube: ''},

{id: 105, musica: 'Apaixonado', cantor: '', linkYoutube: ''},

{id: 106, musica: 'Algo novo', cantor: '', linkYoutube: ''},

{id: 107, musica: 'Meu alvo', cantor: '', linkYoutube: ''},

{id: 108, musica: 'Aguente firme', cantor: '', linkYoutube: ''},

{id: 109, musica: 'Santo do Brasil', cantor: '', linkYoutube: ''},

{id: 110, musica: 'ESPAÇO LIVRE', cantor: '', linkYoutube: ''},

{id: 111, musica: 'Todos que tem sede', cantor: '', linkYoutube: ''},

{id: 112, musica: 'Quebrantado', cantor: '', linkYoutube: ''},

{id: 113, musica: 'Se não for pra te adorar', cantor: '', linkYoutube: ''},

{id: 114, musica: 'Me ama', cantor: '', linkYoutube: ''},

{id: 115, musica: 'Vou me encher', cantor: '', linkYoutube: ''},

{id: 116, musica: 'Aleluia', cantor: '', linkYoutube: ''},

{id: 117, musica: 'Ele é exaltado', cantor: '', linkYoutube: ''},

{id: 118, musica: 'Vai valer a pena', cantor: '', linkYoutube: ''},

{id: 119, musica: 'Ele vem / o tempo de cantar chegou', cantor: '', linkYoutube: ''},

{id: 120, musica: 'Rio de Deus', cantor: '', linkYoutube: ''},

{id: 121, musica: 'Meu respirar', cantor: '', linkYoutube: ''},

{id: 122, musica: 'Entrega', cantor: 'Vineyard', linkYoutube: 'https://youtu.be/z1vnYfxqIZ8?si=WvQQsC-BZej3BN4l'},

{id: 123, musica: 'Eu me rendo', cantor: '', linkYoutube: ''},

{id: 124, musica: 'Agnus dei', cantor: '', linkYoutube: ''},

{id: 125, musica: 'O meu querer', cantor: '', linkYoutube: ''},

{id: 126, musica: 'Juntos', cantor: '', linkYoutube: ''},

{id: 127, musica: 'Rede ao mar', cantor: '', linkYoutube: ''},

{id: 128, musica: 'Eu corro pra ti', cantor: '', linkYoutube: ''},

{id: 129, musica: 'Os sonhos de Deus', cantor: '', linkYoutube: ''},

{id: 130, musica: 'Creio que tu és a cura', cantor: '', linkYoutube: ''},

{id: 131, musica: 'Mais de ti', cantor: '', linkYoutube: ''},

{id: 132, musica: 'Uma fome toma conta de mim', cantor: '', linkYoutube: ''},

{id: 133, musica: 'Que bom te conhecer / Amizade', cantor: '', linkYoutube: ''},

{id: 134, musica: 'Ele não desiste de você', cantor: '', linkYoutube: ''},

{id: 135, musica: 'Lugares altos', cantor: '', linkYoutube: ''},

{id: 136, musica: 'Deus tem o melhor pra mim', cantor: '', linkYoutube: ''},

{id: 137, musica: 'Te Agradeço', cantor: 'Kleber Lucas', linkYoutube: ''},

{id: 138, musica: 'O mar se abrirá', cantor: '', linkYoutube: ''},

{id: 139, musica: 'Pra sempre', cantor: '', linkYoutube: ''},

{id: 140, musica: 'Eu creio que', cantor: '', linkYoutube: ''},

{id: 141, musica: 'Maranata', cantor: '', linkYoutube: ''},

{id: 142, musica: 'Canção do apocalipse', cantor: '', linkYoutube: ''},

{id: 143, musica: 'Do meu interior', cantor: '', linkYoutube: ''},

{id: 144, musica: 'Só em Jesus', cantor: '', linkYoutube: ''},

{id: 145, musica: 'Digno é o Senhor', cantor: '', linkYoutube: ''},

{id: 146, musica: 'Atos 2', cantor: '', linkYoutube: ''},

{id: 147, musica: 'Os sonhos de Deus', cantor: '', linkYoutube: ''},

{id: 148, musica: 'Lindo és', cantor: '', linkYoutube: ''},

{id: 149, musica: 'Santo Espírito', cantor: '', linkYoutube: ''},

{id: 150, musica: 'Redenção', cantor: 'Projeto Sola', linkYoutube: 'https://youtu.be/2FQpBK3Mmp8?si=ODCiVE7jo0s9LfNh'},

{id: 151, musica: 'Aquieta minh`alma', cantor: '', linkYoutube: ''},

{id: 152, musica: 'Galileu', cantor: '', linkYoutube: ''},

{id: 153, musica: 'Plano perfeito', cantor: 'Renascer Praise', linkYoutube: 'https://youtu.be/oM6ApEAJda0'},

{id: 154, musica: '1000 Graus', cantor: '', linkYoutube: ''},

{id: 155, musica: 'Oceanos', cantor: 'Ana Nóbrega', linkYoutube: 'https://youtu.be/1XqHlWsMThA?si=69xWzfMOK_ho7RQC'},

{id: 156, musica: 'Alfa e Ômega', cantor: '', linkYoutube: ''},

{id: 157, musica: 'Faça morada', cantor: '', linkYoutube: ''},

{id: 158, musica: 'Sossega', cantor: '', linkYoutube: ''},

{id: 159, musica: 'Eu cuido de ti', cantor: '', linkYoutube: ''},

{id: 160, musica: 'Lugar secreto', cantor: '', linkYoutube: ''},

{id: 161, musica: 'Oh, quão lindo esse nome ', cantor: 'Ana Nóbrega', linkYoutube: 'https://youtu.be/mTPgy4VuXyo?si=Qs0cO2EoSWo5f_8B'},

{id: 162, musica: 'Adorador por excelência', cantor: '', linkYoutube: ''},

{id: 163, musica: 'Renova-me', cantor: '', linkYoutube: ''},

{id: 164, musica: 'Pra sempre', cantor: '', linkYoutube: ''},

{id: 165, musica: 'E se', cantor: '', linkYoutube: ''},

{id: 166, musica: 'Deus e eu', cantor: '', linkYoutube: ''},

{id: 167, musica: 'Deus é Deus', cantor: '', linkYoutube: ''},

{id: 168, musica: 'Renova-me', cantor: 'Voz da verdade', linkYoutube: ''},

{id: 169, musica: 'ESPAÇO LIVRE', cantor: '', linkYoutube: ''},

{id: 170, musica: 'Ousado amor', cantor: '', linkYoutube: ''},

{id: 171, musica: 'Jesus é o caminho', cantor: '', linkYoutube: ''},

{id: 172, musica: 'Braços de amor', cantor: '', linkYoutube: ''},

{id: 173, musica: 'O que tua glória faz comigo', cantor: '', linkYoutube: ''},

{id: 174, musica: 'Obra Santa', cantor: 'Hinário Aleluia', linkYoutube: ''},

{id: 175, musica: 'Sua casa', cantor: '', linkYoutube: ''},

{id: 176, musica: 'Deixa queimar', cantor: '', linkYoutube: ''},

{id: 177, musica: 'Tu pode', cantor: '', linkYoutube: ''},

{id: 178, musica: 'Algo novo', cantor: '', linkYoutube: ''},

{id: 179, musica: 'Maravilhosa Graça', cantor: '', linkYoutube: 'https://youtu.be/XjZQHVjJO8E?si=xcuvQy4xgqPPmdHl'},

{id: 180, musica: 'Espero por ti', cantor: '', linkYoutube: ''},

{id: 181, musica: 'Quando ele vem', cantor: '', linkYoutube: ''},

{id: 182, musica: 'Casa do Oleiro', cantor: 'Nani Azevedo', linkYoutube: 'https://youtu.be/HfKL01mMCvs?si=-YRvin-9gep-PsJ5'},

{id: 183, musica: 'Toda via me alegrarei', cantor: '', linkYoutube: ''},

{id: 184, musica: 'Hey Pai', cantor: '', linkYoutube: ''},

{id: 185, musica: 'Tua alegria é a minha', cantor: '', linkYoutube: ''},

{id: 186, musica: 'Tua presença', cantor: 'Paulo Nato', linkYoutube: ''},

{id: 187, musica: 'Noites traiçoeiras', cantor: '', linkYoutube: ''},

{id: 188, musica: 'Tu és soberano', cantor: '', linkYoutube: ''},

{id: 189, musica: 'Cantai', cantor: '', linkYoutube: ''},

{id: 190, musica: 'Só tenho a ti', cantor: 'Vineyard', linkYoutube: 'https://youtu.be/lRH8WF4_3VQ?si=ZjK_WKPLu4pKSEII'},

{id: 191, musica: 'Pai nosso', cantor: '', linkYoutube: ''},

{id: 192, musica: 'Deus de promessas', cantor: 'Davi Sacer', linkYoutube: 'https://youtu.be/meiqsELWxNs?si=Rx9bHLc8lRVkYiTl'},

{id: 193, musica: 'Teu reino', cantor: '', linkYoutube: ''},

{id: 194, musica: 'Eu sei que vem', cantor: '', linkYoutube: ''},

{id: 195, musica: 'Quero louvar-te', cantor: '', linkYoutube: ''},

{id: 196, musica: 'Jesus, filho de Deus', cantor: '', linkYoutube: ''},

{id: 197, musica: 'Tu és bom', cantor: '', linkYoutube: ''},

{id: 198, musica: 'Espero por ti', cantor: '', linkYoutube: ''},

{id: 199, musica: 'Só tu és Santo / Uma coisa / deixa queimar', cantor: 'pot pourri', linkYoutube: ''},

{id: 200, musica: 'Estamos de pé', cantor: 'Marcus Salles', linkYoutube: 'https://youtu.be/4x-yrCz1D9g?si=t7ZXd60PbsC9iRHK'},

{id: 201, musica: 'Jesus em tua presença', cantor: '', linkYoutube: ''},

{id: 202, musica: 'Ele vem', cantor: '', linkYoutube: ''},

{id: 203, musica: 'Castelo forte', cantor: '', linkYoutube: ''},

{id: 204, musica: 'O nome de Jesus', cantor: '', linkYoutube: ''},

{id: 205, musica: 'Pode morar aqui', cantor: '', linkYoutube: ''},

{id: 206, musica: 'Lar de milagre', cantor: '', linkYoutube: ''},

{id: 207, musica: 'Infinitamente mais', cantor: '', linkYoutube: ''},

{id: 208, musica: 'O grande eu sou', cantor: 'Leonardo Vieira', linkYoutube: 'https://youtu.be/0UD_cz7CuWg?si=hmc-SvRB3Q0ONcwS'},

{id: 209, musica: 'Deus de palavra', cantor: 'Voz da Verdade', linkYoutube: 'https://youtu.be/8D5xbBuuc4Q?si=hN_Wv14zj7FFq2Pm'},

{id: 210, musica: 'Eu vejo a gloria', cantor: '', linkYoutube: ''},

{id: 211, musica: 'Eu vou construir', cantor: 'Juliano Son', linkYoutube: 'https://youtu.be/1htnqzaKLP8?si=5C22WA7V0m8XYtw9'},

{id: 212, musica: 'A benção', cantor: '', linkYoutube: ''},

{id: 213, musica: 'Eu só quero sua presença', cantor: '', linkYoutube: ''},

{id: 214, musica: 'Nunca me deixou', cantor: '', linkYoutube: ''},

{id: 215, musica: 'Fazer morada', cantor: '', linkYoutube: ''},

{id: 216, musica: 'Eu e minha casa', cantor: '', linkYoutube: ''},

{id: 217, musica: 'Bondade de Deus', cantor: '', linkYoutube: ''},

{id: 218, musica: 'Avivamento', cantor: 'Adoração central', linkYoutube: ''},

{id: 219, musica: 'In memorian', cantor: 'Gabriel', linkYoutube: ''},

{id: 220, musica: 'Deus do avivamento', cantor: '', linkYoutube: ''},

{id: 221, musica: 'Ruja o Leão', cantor: '', linkYoutube: ''},

{id: 222, musica: 'Corpo e família', cantor: '', linkYoutube: ''},

{id: 223, musica: 'Aclame ao Senhor', cantor: '', linkYoutube: ''},

{id: 224, musica: 'Consagração', cantor: '', linkYoutube: ''},

{id: 225, musica: 'Estrela do amanhã', cantor: '', linkYoutube: ''},

{id: 226, musica: 'O espirito de Deus está aqui', cantor: '', linkYoutube: ''},

{id: 227, musica: 'Te agradeço', cantor: 'André Valadão', linkYoutube: ''},

{id: 228, musica: 'Tu és / Águas purificadoras', cantor: '', linkYoutube: ''},

{id: 229, musica: 'Águas purificadoras', cantor: '', linkYoutube: ''},

{id: 230, musica: 'Nada além do sangue', cantor: '', linkYoutube: ''},

{id: 231, musica: 'Nos braços do Pai', cantor: 'Diante do trono', linkYoutube: 'https://youtu.be/c_hsLDNme64'},

{id: 232, musica: 'Santo para sempre', cantor: 'Marine Friesen', linkYoutube: 'https://youtu.be/Ao-vBEhBxr0'},

{id: 233, musica: 'O mover do Espírito', cantor: 'Armando Filho', linkYoutube: 'https://youtu.be/M_MKgoVmglw'},

{id: 234, musica: 'Escape', cantor: 'Renascer Praise', linkYoutube: 'https://youtu.be/vM2A2XEm9TE'},

{id: 235, musica: 'Os que olham para ti', cantor: 'Florianópolis House Of Prayer', linkYoutube: 'https://youtu.be/Kv96CEmcjVs'},

{id: 236, musica: 'Clamo Jesus', cantor: 'Paulo Cesar Baruk', linkYoutube: 'https://youtu.be/ye9caqETC0A'},

{id: 237, musica: '63', cantor: 'Ipalpha', linkYoutube: 'https://youtu.be/FXMmY2ql9Ug'},

{id: 238, musica: 'Nosso Rei', cantor: 'Projeto Sola', linkYoutube: 'https://youtu.be/QBSRPNd9LAg'},

{id: 239, musica: 'Único', cantor: 'Florianópolis House Of Prayer', linkYoutube: 'https://youtu.be/0vCmIKyJPRI'},

{id: 240, musica: 'Só em Ti', cantor: 'Ipalpha', linkYoutube: 'https://youtu.be/EY3cIar-JU0'},

{id: 241, musica: 'Meia noite', cantor: 'Florianópolis House Of Prayer', linkYoutube: 'https://youtu.be/hRJUcvsnqKs?si=f2ArgHwMcka_ZQgc'},

{id: 242, musica: 'Isaías 9', cantor: 'Rodolfo Abrantes', linkYoutube: 'https://youtu.be/XPxUfGfWtRA?si=7R60jSM9gUy2__A0'},

];

const ITEMS_PER_PAGE = 10;

const ListaPaginada: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchMusic, setSearchMusic] = useState('');
  const [sortOrder, setSortOrder] = useState<'id' | 'alphabetical'>('id');

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const removePunctuationAndAccents = (str: string) => {
    return str.normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")        // Remove acentos
              .replace(/[.,\/#$!?%\^&\*;:{}=\-_`~()]/g, "") // Remove pontuações
              .replace(/\s{2,}/g, " ");               // Substitui espaços múltiplos por um único espaço
  };

  const filteredItems = items.filter((item) => {
    const lowerSearchTerm = removePunctuationAndAccents(searchMusic.toLowerCase());
    const normalizedMusica = removePunctuationAndAccents(item.musica.toLowerCase());
    const normalizedCantor = item.cantor ? removePunctuationAndAccents(item.cantor.toLowerCase()) : '';
    
    return (
      normalizedMusica.includes(lowerSearchTerm) ||
      (normalizedCantor && normalizedCantor.includes(lowerSearchTerm)) ||
      item.id.toString().includes(lowerSearchTerm)
    );
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === 'id') {
      return a.id - b.id;
    } else if (sortOrder === 'alphabetical') {
      return removePunctuationAndAccents(a.musica).localeCompare(removePunctuationAndAccents(b.musica));
    }
    return 0;
  });

  const currentItems = sortedItems.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  return (
    <div className=''>
      <div className="flex tablet:justify-around border-b-[1px] space-y-10 monitor:ml-[-5vh] celular:sticky celular:pb-2 celular:top-0 celular:bg-[#181f2c] celular:shadow ">
        {/* Número, Música e Cantor invisíveis apenas em dispositivos móveis */}
        <div className="hidden tablet:block w-full celular:w-auto pt-[34px] hover:cursor-default">
          <p>Número</p>
        </div>
        <div className="hidden tablet:block w-full celular:w-auto text-center pr-4 hover:cursor-default">
          <p>Música</p>
        </div>
        <div className="hidden tablet:block w-full celular:w-auto text-center hover:cursor-default">
          <p>Cantor</p>
        </div>
        <div className="w-56 text-center justify-between pr-8">
          <input 
            type="search" 
            id="search-input" 
            className="rounded-lg outline-none bg-transparent pl-2 tablet:px-3 tablet:w-60 w-full border-[1px]" 
            placeholder='Digite o nome da Música'
            value={searchMusic}
            onChange={(e) => {
              setSearchMusic(e.target.value);
              setCurrentPage(1); // Resetar para a primeira página ao buscar
            }}
          />
        </div>
        <div className="w-auto text-center pr-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex rounded-lg outline-none bg-transparent px-2 pr-4 h-[25px] border-[1px] text-center mb-4">
                <span className="hidden tablet:inline">Ordenar por</span> <ArrowDownUp className='size-3 mt-1.5 ml-2' />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={5} className=" shadow-lg">
              <DropdownMenuItem className='bg-[#181f2c] p-1.5 border-b-[1px] rounded-t-md hover:cursor-pointer' onSelect={() => { setSortOrder('id'); setCurrentPage(1);}}>
                <ListOrdered />
                Ordem Numérica
              </DropdownMenuItem>
              <DropdownMenuItem className='bg-[#181f2c] p-1.5 rounded-b-md hover:cursor-pointer' onSelect={() => { setSortOrder('alphabetical'); setCurrentPage(1);}}>
                <AArrowUp />
                Ordem Alfabética
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex tablet:hidden">
          <SaveMusic />
        </div>
      </div>

      {currentItems.length === 0 ? (
        <div className='text-center py-28 border-b-[1px]'>
          <p className='text-lg'>A música não existe, ou você digitou errado.</p>
          <Frown className='w-full mt-8' />
        </div>
      ) : (
        currentItems.map((item) => (
          <Musica key={item.id} {...item} />
        ))
      )}

      {currentItems.length > 0 && (
        <div className="mt-4 flex justify-center border-t-[1px] pt-5">
          <ChevronsLeft
            className={`mt-[7px] hover:scale-125 hover:cursor-pointer 
                hover:animate-pulse duration-300 ${
              currentPage - 5 <= 0 ? 'invisible' : 'visible'
            }`}
            onClick={() => goToPage(currentPage - 5)}
          />
          <ChevronLeft
            className={`mt-[7px] hover:scale-125 hover:cursor-pointer 
                hover:animate-pulse duration-300 ${
              currentPage === 1 ? 'invisible' : 'visible'
            }`}
            onClick={() => goToPage(currentPage - 1)}
          />
          {Array.from({ length: totalPages }, (_, index) => {
            const pageIndex = index + 1;
            if (pageIndex < currentPage - 2 || pageIndex > currentPage + 2) {
              return null;
            }
            return (
              <span
                key={index}
                onClick={() => goToPage(pageIndex)}
                className={`mx-1 px-2 py-1 text-lg hover:scale-125 hover:cursor-pointer duration-300 ${
                  currentPage === pageIndex ? 'text-white animate-pulse' : 'text-gray-600'
                }`}
              >
                {pageIndex}
              </span>
            );
          })}
          <ChevronRight
            className={`mt-[7px] hover:scale-125 hover:cursor-pointer 
                hover:animate-pulse duration-300 ${
              currentPage === totalPages ? 'invisible' : 'visible'
            }`}
            onClick={() => goToPage(currentPage + 1)}
          />
          <ChevronsRight
            className={`mt-[7px] hover:scale-125 hover:cursor-pointer 
                hover:animate-pulse duration-300 ${
              currentPage + 4 >= totalPages ? 'invisible' : 'visible'
            }`}
            onClick={() => goToPage(currentPage + 5)}
          />
        </div>
      )}
    </div>
  );

};

export default ListaPaginada;

