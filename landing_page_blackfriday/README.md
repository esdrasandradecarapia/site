# Landing Page - Black Friday - Programa Corpo Mais Seco e Definido

Landing page moderna e responsiva criada para capturar leads e direcionar pessoas para um grupo do WhatsApp durante a Black Friday.

## 📋 Estrutura

A página está dividida em 3 dobras principais:

1. **DOBRA 1 - Hero/Impacto Imediato**: Título principal, imagem, benefícios e CTA principal
2. **DOBRA 2 - Expectativa e Data**: Contagem regressiva, informações sobre abertura das vagas
3. **DOBRA 3 - Construção de Tensão e Fechamento**: Copy emocional, imagens antes/depois, CTA final

## 🚀 Como usar

### 1. Configurar o link do WhatsApp

Abra o arquivo `script.js` e localize a linha 31:

```javascript
const whatsappLink = 'https://chat.whatsapp.com/SEUCODIGODEGRUPO';
```

Substitua `'https://chat.whatsapp.com/SEUCODIGODEGRUPO'` pelo link real do seu grupo do WhatsApp.

**Como obter o link do grupo do WhatsApp:**
1. Abra o grupo no WhatsApp
2. Toque no nome do grupo
3. Role até "Link do grupo" ou "Convidar para grupo via link"
4. Copie o link
5. Cole no arquivo `script.js`

### 2. Configurar a data de abertura

No arquivo `script.js`, linha 2, ajuste a data e hora:

```javascript
const targetDate = new Date('2024-11-25T09:00:00').getTime();
```

Altere `'2024-11-25T09:00:00'` para a data e hora desejadas no formato: `'YYYY-MM-DDTHH:MM:SS'`

### 3. Personalizar imagens

Substitua as imagens placeholder pelos seus próprios arquivos:

- **Hero Image**: Linha 22 do `index.html` - substitua o `src` da imagem
- **Clock Image**: Linha 80 do `index.html` - imagem de contagem regressiva
- **Before/After Images**: Linhas 119 e 123 do `index.html` - imagens de antes e depois

### 4. Personalizar textos

Edite o arquivo `index.html` para alterar qualquer texto conforme sua necessidade.

### 5. Abrir no navegador

Simplesmente abra o arquivo `index.html` no seu navegador ou hospede em um servidor web.

## 📁 Arquivos

- `index.html` - Estrutura HTML da página
- `styles.css` - Estilos CSS responsivos e modernos
- `script.js` - JavaScript para countdown e funcionalidades
- `README.md` - Este arquivo de instruções

## 🎨 Características

- ✅ Design moderno e profissional
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Contagem regressiva automática
- ✅ Animações suaves
- ✅ Botões CTA destacados
- ✅ Cores e tipografia atraentes
- ✅ Otimizado para conversão

## 🔧 Personalização

### Cores

As cores podem ser alteradas no arquivo `styles.css` através das variáveis CSS na seção `:root`:

```css
:root {
    --primary-color: #FF6B6B;
    --secondary-color: #4ECDC4;
    --accent-color: #FFE66D;
    /* ... */
}
```

### Fontes

A fonte utilizada é a Inter do Google Fonts. Para alterar, modifique o link no `<head>` do `index.html` e a propriedade `font-family` no CSS.

## 📱 Responsividade

A página é totalmente responsiva e se adapta a:
- Smartphones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Telas grandes (1200px+)

## ⚠️ Notas Importantes

1. **Link do WhatsApp**: Certifique-se de configurar o link correto do grupo
2. **Data de abertura**: Ajuste conforme a data real do evento
3. **Imagens**: Substitua as imagens placeholder por imagens reais do produto/serviço
4. **Testes**: Teste em diferentes dispositivos antes de publicar

## 📞 Suporte

Para dúvidas ou problemas, verifique:
- Se o link do WhatsApp está correto
- Se a data está no formato correto
- Se as imagens estão carregando corretamente
- Se o JavaScript está habilitado no navegador

---

**Boa sorte com sua campanha de Black Friday! 🚀**
