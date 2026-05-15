# Perfil Dev Jr

Aplicativo desenvolvido em React Native com Expo para apresentar um perfil profissional de candidato a Desenvolvedor Mobile Júnior.

## Tecnologias utilizadas
- React Native
- Expo
- JavaScript
- React Navigation
- Git
- GitHub

## Funcionalidades implementadas
- Tela de perfil com nome, cargo, imagem e descrição "Sobre mim"
- Tela de habilidades com lista de pelo menos 5 competências
- Tela de projetos e seção de contato
- Navegação por abas inferiores (TabBar)
- Uso de componentes nativos: View, Text, Image, ScrollView, FlatList, TextInput, Button
- Estilização com StyleSheet e estrutura de código organizada

## Telas
- **Perfil:** apresenta a foto, nome, cargo e informações sobre o candidato.
- **Habilidades:** lista de habilidades relevantes para a vaga.
- **Projetos/Contato:** descreve projetos concluídos e exibe informações de contato com campo de mensagem e botão para enviar.

## Organização do código
- `App.js`: configura a navegação inferior por abas
- `screens/PerfilScreen.js`: tela de perfil
- `screens/HabilidadesScreen.js`: tela de habilidades
- `screens/ProjetosScreen.js`: tela de projetos e contato
- `assets/`: contém a imagem de perfil

## Como executar o projeto
1. Clone o repositório:
   ```bash
   git clone <link-do-repositorio>
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd ativ_perfil
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o projeto:
   ```bash
   npx expo start
   ```

## Autor
Lucas Silva
