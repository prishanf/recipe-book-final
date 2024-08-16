
import {SalesforceService} from '~/services/SalesforceDataService'

export default defineEventHandler(async (event) => {
  const service = await SalesforceService.getInstance();
  const resp = await service.queryData(`Select Id, Name from Contact LIMIT 10`);
  return resp; 
})
