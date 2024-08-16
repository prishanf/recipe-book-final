import { SalesforceService } from '~~/services/SalesforceDataService'
export default defineEventHandler(async (event) => {
  const service = await SalesforceService.getInstance();
  const body = await readBody(event)
  console.log('before', body, typeof body);
  const resp = await service.createRecord('Recipe__c', body)
  return {
    resp: resp
  }

})
