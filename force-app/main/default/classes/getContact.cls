public with sharing class getContact {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact() {
        List<Contact> ContactRecords = [Select Id, Name, Title, Phone FROM Contact];
        return ContactRecords;
    }
}
