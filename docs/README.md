# Conector Oracle para n8n

Este conector permite a integração com bancos de dados Oracle diretamente no n8n, oferecendo operações para executar consultas e instruções SQL.

---

## 📥 Instalação
1. Instale o pacote no diretório `nodes` do n8n:
```bash
pnpm install n8n-nodes-oracle
```
2. Reinicie o n8n.

---

## 🔑 Configuração de Credenciais
### Parâmetros Necessários:
| Campo                              | Descrição                                                                 |
|------------------------------------|---------------------------------------------------------------------------|
| **Tipo de Conexão**                | `Básica` (detalhes manuais) ou `String de Conexão` (variável de ambiente) |
| **Host**                           | Endereço do servidor Oracle (apenas para tipo básico)                     |
| **Porta**                          | Porta do Oracle (padrão: 1521)                                           |
| **Service Name**                   | Nome do serviço/SID da base                                              |
| **Nome da Variável de Ambiente**   | Nome da variável contendo a string de conexão (ex: `ORACLE_CONN_STRING`)  |
| **Usuário**                        | Usuário do banco de dados                                                |
| **Senha**                          | Senha do usuário                                                         |
| **Modo Cliente**                   | `Thin` (leve) ou `Thick` (requer driver Oracle completo)                  |

---

## 🛠 Operações Disponíveis
### 1. `Execute Query` (SELECT)
- **SQL Query**: Consulta SQL para recuperação de dados.
  ```sql
  SELECT * FROM employees WHERE department_id = :deptId
  ```
- **Parameters**: Parâmetros em JSON (ex: `{"deptId": 20}`).
- **Result Format**: Formatação dos resultados (`Uppercase`, `Lowercase`, `Original`).

### 2. `Execute Statement` (DML/DDL)
- **SQL Query**: Comandos como `INSERT`, `UPDATE`, ou chamadas de procedimento.
  ```sql
  INSERT INTO employees (name, role) VALUES (:name, :role)
  ```
- **Auto Commit**: Habilita commit automático de transações.

---

## ⚙️ Configurações Avançadas
### Opções de Pool de Conexões:
| Parâmetro            | Descrição                        | Padrão |
|----------------------|----------------------------------|--------|
| **Pool Min**         | Conexões mínimas no pool         | 1      |
| **Pool Max**         | Conexões máximas no pool         | 10     |
| **Queue Timeout (Ms)**| Tempo de espera por conexão (ms) | 30000  |

---

## 📋 Exemplo de Uso
### Cenário: Consulta de Funcionários
1. **Credenciais**:  
   - Tipo: `Básica`  
   - Host: `oracle-prod.example.com`  
   - Usuário/Senha: `admin/******`

2. **Nó Oracle**:
   - **Operation**: `Execute Query`  
   - **Query**:
     ```sql
     SELECT first_name, salary FROM employees WHERE salary > :minSalary
     ```
   - **Parameters**: `{"minSalary": 5000}`  
   - **Format**: `Uppercase`

3. **Saída**:
   ```json
   [
     { "FIRST_NAME": "John", "SALARY": 7500 },
     { "FIRST_NAME": "Maria", "SALARY": 6200 }
   ]
   ```

---

## ⚠️ Requisitos e Notas
1. **Cliente Oracle**:  
   - Para modo `Thick`, defina as variáveis de ambiente:  
     ```bash
     ORACLE_CLIENT_LIB_PATH=/path/to/instantclient
     ORACLE_CLIENT_CONFIG_DIR=/path/to/network/admin
     ```

2. **Validação de Consultas**:  
   - A operação `Execute Query` bloqueia comandos não-SELECT (ex: `INSERT`).

3. **Strings de Conexão**:  
   - Exemplo de variável de ambiente:  
     ```
     ORACLE_CONN_STRING=(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=oracle-host)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XE)))
     ```

---

## 🔄 Recursos Adicionais
- **Repositório**: [GitHub](https://github.com/rempel/n8n-oracle-connector)  
- **Suporte**: Envie issues no GitHub para reportar problemas.  

Documentação atualizada para versão 1.0.0. Testado com Oracle Database 19c e n8n 1.18+.
