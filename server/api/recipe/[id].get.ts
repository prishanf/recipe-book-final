import {SalesforceService} from '~/services/SalesforceDataService'

export default defineEventHandler(async (event) => {
  const recId = event.context.params?.id;
  const service = await SalesforceService.getInstance();
  const resp = await service.queryData(`Select Id, Name, Ingredients__c,Directions__c from Recipe__c where id='${recId}'`);
  return resp; 
})

