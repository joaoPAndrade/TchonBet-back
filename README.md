# TchonBet-back
Este projeto é a implementação do projeto final da disciplina BCC3004

## Dependências

- Node.js

- Docker Desktop (para execução do container do banco de dados) – necessário para executar o docker Windows

- WSL (Windows Subsystem for Linux) – necessário para usuários Windows

- Docker Engine - necessário para usuários Linux 

## Instalação e Execução

### Para Usuários Windows

1. Instalar o WSL

Se você estiver utilizando Windows, abra o prompt de comando e execute:

```bash
    wsl --install
```

2. Instalar o Ubuntu:

Após instalar o WSL, instale o Ubuntu (versão 24.04) com:

```bash
    wsl --install -d Ubuntu-24.04
```

## Preparando o Ambiente

1. Executar o Docker Desktop:

Certifique-se de que o Docker Desktop esteja em execução. Em seguida, inicie os containers com:

```bash
    docker compose up -d
```

2. Configurar as Variáveis de Ambiente:

Na raiz do projeto, crie um arquivo chamado .env e insira o seguinte conteúdo:

```bash
    DATABASE_URL=postgresql://admin:senha123@localhost:5432/tchonbet?schema=bah
```

3. Instalar Dependências e Realizar Migrações:

No diretório do projeto, execute:

```bash
    npm install
```
```bash
    npx prisma migrate dev
```

4. Iniciar o Servidor em Modo de Desenvolvimento:

Finalmente, execute:

```bash
    npm run start:dev
```

## Considerações 

Esse processo garante que o ambiente do back-end esteja corretamente configurado, facilitando tanto o desenvolvimento quanto a manutenção do projeto. Caso encontre algum problema, verifique as configurações do Docker e do WSL, além das variáveis de ambiente no arquivo .env.

## Padrão de projeto

Neste projeto, adotamos o padrão de Fachada para simplificar e abstrair as camadas internas do software. Em arquiteturas tradicionais, a divisão de responsabilidades ocorre da seguinte forma:

- Repository: Responsável pelo acesso direto ao banco de dados.

- Service: Gerencia a lógica de negócio e invoca os métodos dos repositórios.

Na nossa abordagem, essas funções foram unificadas em uma única camada. Ou seja, ao chamar o service, ele é responsável tanto por processar a lógica de negócio quanto por acessar os dados no banco. Essa integração resulta em:

- Simplificação da Arquitetura: Menor complexidade na interação entre camadas.

- Facilidade de Manutenção: Uma estrutura mais intuitiva e coesa para futuras alterações.

## Considerações Finais

A implementação do padrão de fachada visa tornar o código mais limpo e de fácil compreensão, contribuindo para a eficiência no desenvolvimento e manutenção do projeto.

<img src="https://github.com/joaoPAndrade.png" alt="joaoPAndrade" width="50"> [@joaoPAndrade](https://github.com/joaoPAndrade)<br>
<img src="https://github.com/MatCoitinho.png" alt="MatCoitinho" width="50"> [@MatCoitinho](https://github.com/MatCoitinho)<br>
<img src="https://github.com/femedici.png" alt="femedici" width="50"> [@femedici](https://github.com/femedici)<br>
<img src="https://github.com/feliperm17.png" alt="feliperm17" width="50"> [@feliperm17](https://github.com/feliperm17)<br>
<img src="https://github.com/Cast43.png" alt="Cast43" width="50"> [@Cast43](https://github.com/Cast43)<br>
<img src="https://github.com/caiogoia123.png" alt="caiogoia123" width="50"> [@caiogoia123](https://github.com/caiogoia123)<br>
