import {SalesforceService} from '~/services/SalesforceDataService'

export default defineEventHandler(async (event) => {
  const service = await SalesforceService.getInstance();
  const resp = await service.queryData(`Select Id, Name, Ingredients__c from Recipe__c LIMIT 10`);
  return resp; 
})