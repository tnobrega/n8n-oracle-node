import {
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class OracleApi implements ICredentialType {
  name = 'oracleApi';
  displayName = 'Oracle Database (Credentials)';
  documentationUrl = 'https://rempel.github.io/n8n-oracle-connector/#/';
  properties: INodeProperties[] = [
    {
      displayName: 'Connection Type',
      name: 'connectionType',
      type: 'options',
      options: [
        {
          name: 'Basic',
          value: 'basic',
        },
        {
          name: 'Connection String (Environment Variable)',
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
      displayName: 'Port',
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
      displayName: 'Environment Variable Name',
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
      displayName: 'User',
      name: 'user',
      type: 'string',
      default: '',
      required: true,
    },
    {
      displayName: 'Password',
      name: 'password',
      type: 'string',
      typeOptions: {
        password: true,
      },
      default: '',
      required: true,
    },
    {
      displayName: 'Client Mode',
      name: 'clientMode',
      type: 'options',
      options: [
        { name: 'Thin', value: 'thin' },
        { name: 'Thick', value: 'thick' },
      ],
      default: 'thin',
      description: 'Oracle client mode configuration',
    },
  ];
}
