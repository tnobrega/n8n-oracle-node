import {
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class OracleApi implements ICredentialType {
  name = 'oracleApi';
  displayName = 'Oracle Database API';
  documentationUrl = '';
  properties: INodeProperties[] = [
    {
      displayName: 'Tipo de Conexão',
      name: 'connectionType',
      type: 'options',
      options: [
        {
          name: 'Básica',
          value: 'basic',
        },
        {
          name: 'String de Conexão (Variável de Ambiente)',
          value: 'connectionString',
        },
      ],
      default: 'basic',
    },
    {
      displayName: 'Host',
      name: 'host',
      type: 'string',
      displayOptions: {
        show: {
          connectionType: ['basic'],
        },
      },
      default: 'localhost',
      required: true,
    },
    {
      displayName: 'Porta',
      name: 'port',
      type: 'number',
      displayOptions: {
        show: {
          connectionType: ['basic'],
        },
      },
      default: 1521,
      required: true,
    },
    {
      displayName: 'Service Name',
      name: 'serviceName',
      type: 'string',
      displayOptions: {
        show: {
          connectionType: ['basic'],
        },
      },
      default: '',
      required: true,
    },
    {
      displayName: 'Nome da Variável de Ambiente',
      name: 'connectionStringEnv',
      type: 'string',
      displayOptions: {
        show: {
          connectionType: ['connectionString'],
        },
      },
      default: 'ORACLE_CONN_STRING',
      placeholder: 'ORACLE_CONN_STRING',
      required: true,
    },
    {
      displayName: 'Usuário',
      name: 'user',
      type: 'string',
      default: '',
      required: true,
    },
    {
      displayName: 'Senha',
      name: 'password',
      type: 'string',
      typeOptions: {
        password: true,
      },
      default: '',
      required: true,
    },
    {
      displayName: 'Modo Cliente',
      name: 'clientMode',
      type: 'options',
      options: [
        { name: 'Thin', value: 'thin' },
        { name: 'Thick', value: 'thick' },
      ],
      default: 'thin',
      description: 'Configuração do modo cliente Oracle',
    },
  ];
}
