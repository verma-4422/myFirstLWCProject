public with sharing class GetAccList {
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccounts(){
        try{
        List<Account> AccountRecords= [Select id,Name,OwnerId,Phone,Website,AnnualRevenue from Account where Industry='Financial Services'];
        return AccountRecords;
        }
        catch(Exception ex){
            throw new AuraHandledException('Exception:'+ex.getMessage());
        }

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> SearchByAccountName(String Name){
        try{
        List<Account> AccountRecords= [Select id,Name,OwnerId,Phone,Website,AnnualRevenue from Account where Industry='Financial Services' and name LIKE :Name];
        return AccountRecords;
        }
        catch(Exception ex){
            throw new AuraHandledException('Exception:'+ex.getMessage());
        }

    }
}
