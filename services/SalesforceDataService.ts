import jsforce from 'jsforce';

export class SalesforceService {

    private static instance: SalesforceService

    config = useRuntimeConfig()
    
    public connection :jsforce.Connection | undefined 
    
    private constructor() { }

    public static async getInstance(): Promise<SalesforceService> {
        if (!SalesforceService.instance) {
            SalesforceService.instance = new SalesforceService();
            await SalesforceService.instance.login();
        }
        return SalesforceService.instance;
    }
    
    private async login() {
        let data = {connection:null, user:null};
        let conn = new jsforce.Connection({});
        console.log(this.config.private);
        const username = this.config.sfUserName;
        const password = this.config.sfPassword;
        await conn.login(username, password, function(err, userInfo) {
        if (err) { return console.error(err); }
            console.log("User ID: " + userInfo.id);
            console.log("Org ID: " + userInfo.organizationId);
        });
        this.connection =  conn; 
         
    }

    public async getAccounts(){
        let resp = await this.connection?.query("SELECT Id, Name FROM Account", function(err, result) {
            if (err) { return err }
            console.log("total : " + result.totalSize);
            console.log("fetched : " + result.records.length);
            return result;
          });
        
        return resp;
    } 

    public async queryData(query:string){
        let resp = await this.connection?.query(query,function(err, result) {
            if (err) { return err }
            console.log("total : " + result.totalSize);
            console.log("fetched : " + result.records.length);
            let final = result.records.map((item)=>{
                delete item['attributes'];
                return item
            })
            return final;
          });
        
        return resp;
    } 

    public async retrieveRecord(objetName:string,id:string){
       return this.connection?.sobject(objetName).retrieve(id, function(err:string, data:object) {
            if (err) { return err; }
            return data;
        });
    } 

    //{ Name : 'My Account #1' }
    public async createRecord(objetName:string, record:object|[]){
        return this.connection?.sobject(objetName).create(record, function(err, ret) {
            if (err || !ret.success) { return console.error(err, ret); }
            console.log("Created records id : " + ret);
            return ret;
        });
        
    }
    // Should have id field { Id : '0017000000hOMChAAO', Name : 'Updated Account #1' }
    public async updateRecord(objetName:string, record:object|[]){
        return this.connection?.sobject(objetName).update(record, function(err, ret) {
            if (err || !ret.success) { return console.error(err, ret); }
            console.log("updated records : " + ret);
            return ret;
        });
        
    }
    
    public async deleteRecord(objetName:string, recordId:string){
        return this.connection?.sobject(objetName).destroy(recordId, function(err, ret) {
            if (err || !ret.success) { return console.error(err, ret); }
            console.log("delete records : " + ret);
            return ret;
        });
        
    }

    public async deleteRecords(objetName:string, recordIds: string[]){
        return this.connection?.sobject(objetName).destroy(recordIds, function(err, ret) {
            if (err) { return console.error(err, ret); }
            console.log("delete records : " + ret);
            return ret;
        });
        
    }

    public async upsertRecord(objetName:string, record:object|[], externalIdField:string){
        return this.connection?.sobject(objetName).upsert(record,externalIdField, function(err, ret) {
            if (err || !ret.success) { return console.error(err, ret); }
            console.log("upserted records : " + ret);
            return ret;
        });
        
    }
  
}




