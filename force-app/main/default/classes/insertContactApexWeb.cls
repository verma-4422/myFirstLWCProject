public with sharing class insertContactApexWeb {
    public insertContactApexWeb() {

    }
    @AuraEnabled
    public static void saveContactRecord(Contact con){
        System.debug('acc--'+con);
        try{
            insert con;
        }
        catch(Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }
    }
}
