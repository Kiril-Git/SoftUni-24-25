import java.util.*;

public class O8_CompanyUsers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String inputCompanies = sc.nextLine();
        Map<String, List<String>> companiesMap = new LinkedHashMap<>();

        while (!inputCompanies.equals("End")) {
            String[] companiesTokens = inputCompanies.split(" -> ");
            String companyName = companiesTokens[0];
            String employeeId = companiesTokens[1];

            companiesMap.putIfAbsent(companyName, new ArrayList<>());

            if (!companiesMap.get(companyName).contains(employeeId)){
                companiesMap.get(companyName).add(employeeId);
            }


            inputCompanies = sc.nextLine();
        }

        companiesMap.forEach((k, v) -> {
            System.out.println(k);
            v.forEach(el -> System.out.printf("-- %s\n", el));
        });
    }


    /*
    private static boolean anyCompanyContainEmployeeId(Map<String, List<String>> companiesMap, String employeeId) {

        return companiesMap.values().stream().anyMatch(el -> el.contains(employeeId));
    }
    */

}
