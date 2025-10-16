# Academia Mazze - Landing Page e Sistema de Avaliações

Landing page responsiva da **Academia Mazze**, localizada em São Roque/SP, com funcionalidades interativas, mapa de localização e sistema de avaliações integrado.

---

## Tecnologias Utilizadas

- **Front-end:** React, Tailwind CSS, Hero Icons  
- **Back-end:** Node.js, Express  
- **Banco de dados:** Arquivo JSON (`reviews.json`)  
- **Outros:** CORS, Body-Parser  


---

## Funcionalidades

- Landing page responsiva com seções: Home, Serviços, Avaliações e Localização  
- Sistema de avaliações: CRUD completo (criar, ler, atualizar, deletar)  
- Botões de CTA integrados com WhatsApp  
- Mapa interativo com localização da academia  
- Footer com links para Facebook, Instagram e informações de contato  

---

## Como Rodar o Projeto

### 1. Clonar o repositório
```bash
git clone <seu-repo-url>
cd academia-mazze

*Instalar dependências*
npm install

*Rodar o servidor e front-end*
npm start

O npm start roda React e Express juntos.
O front-end fica em http://localhost:3000 e a API de avaliações em http://localhost:5000/api/reviews.

*Exemplo de payload para POST/PUT:*
{
  "name": "João",
  "comment": "Treino excelente!",
  "rating": 5
}





