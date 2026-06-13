import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovTransportjhApi implements ICredentialType {
        name = 'N8nDevApisetuGovTransportjhApi';

        displayName = 'Apisetu Gov Transportjh API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovTransportjh/apisetu-gov-transportjh.svg', dark: 'file:../nodes/ApisetuGovTransportjh/apisetu-gov-transportjh.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/transportjh/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/transportjh/v3',
                        description: 'The base URL of your Apisetu Gov Transportjh API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
