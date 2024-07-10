/* This Project is Created By Anushtha Singh Kushwah 
Enrollment - 0801CS233D01
Programming Practices Mini Project*/
#include <stdio.h>
#include <string.h>

#define MAX_SEATS 15

char passports[MAX_SEATS][6];
char names[MAX_SEATS][15];
char destinations[MAX_SEATS][15];
char emails[MAX_SEATS][15];
int seat_nums[MAX_SEATS];

int num = 0;

void reserve();
void cancel();
void display();
void savefile();
void destination();

void showAvailableSeats() {
    printf("\nAvailable Seats: ");
    for (int i = 0; i < MAX_SEATS; i++) 
    {
        if (passports[i][0] == '\0') 
        {
            printf("A-%d ", i + 1);
        }
    }
    printf("\n");
}

int main() {
    int choice;

    printf("\n\n********************************************");
    printf("\n\n**  Welcome to Anushtha's airline system  **");
    printf("\n\n********************************************\n");

    do {
        printf("\n\n Please enter your choice from below (1-4):");
        printf("\n\n 1. Reservation");
        printf("\n\n 2. Cancel");
        printf("\n\n 3. DISPLAY RECORDS");
        printf("\n\n 4. Explore Some Famous Destinations");
        printf("\n\n 5. EXIT");
        printf("\n\n Enter your choice: ");
        
        scanf("%d", &choice);
        fflush(stdin);


        switch (choice) 
        {

            case 1:
                reserve();
                break;

            case 2:
                cancel();
                break;

            case 3:
                display();
                break;
            
            case 4:
                destination();
                break;

            case 5:
                savefile();
                break;

            default:
                printf("\nSorry, invalid choice! Please choose from 1-4.\n");
        }
    }
    while (choice != 5);

    printf("\n\n**********************************************");
    printf("\n\n**      HOPE YOU HAVE A BEAUTIFUL DAY       **");
    printf("\n\n**********************************************\n");

    return 0;
}

void reserve() {
    if (num >= MAX_SEATS) 
    {

        printf("\n\n**********************************************");
        printf("\n\n**  Seat Full. Reservation is not possible. **");
        printf("\n\n**********************************************\n");
        return;
    
    }

    showAvailableSeats();

    int chosen_seat;
    
    do {
        printf("Enter the seat number you want to reserve (1-%d): ", MAX_SEATS);
        scanf("%d", &chosen_seat);
        if (chosen_seat < 1 || chosen_seat > MAX_SEATS || passports[chosen_seat - 1][0] != '\0') {
            printf("Invalid seat choice or seat already taken. Please choose an available seat.\n");
        }
    } 
    while (chosen_seat < 1 || chosen_seat > MAX_SEATS || passports[chosen_seat - 1][0] != '\0');

    printf("Enter passport number ( characters): ");
    scanf("%s", passports[chosen_seat - 1]);

    printf("Enter name (up to 14 characters): ");
    scanf("%s", names[chosen_seat - 1]);

    printf("Enter email address (up to 14 characters): ");
    scanf("%s", emails[chosen_seat - 1]);

    printf("Enter destination (up to 14 characters): ");
    scanf("%s", destinations[chosen_seat - 1]);

    seat_nums[num] = chosen_seat;
    num++;
    printf("Seat booking successful! Your seat number is: Seat A-%d\n", chosen_seat);
}

void savefile() 
{
    FILE *fpointer = fopen("mufti_records.txt", "w");
    if (!fpointer) 
    {
        printf("Error in opening file!\n");
        return;
    }

    for (int i = 0; i < MAX_SEATS; i++) 
    {
        if (passports[i][0] != '\0') 
        {
            fprintf(fpointer, "%-6s%-15s%-15s%-15s\n", passports[i], names[i], emails[i], destinations[i]);
        }
    }

    fclose(fpointer);
}

void destination() {
   int pref;
   printf("************************\n");
   printf("* Enter Your Prefernce *\n");
   printf("* 1. With Family       *\n");
   printf("* 2. With Friends      *\n");
   printf("* 3. Solo              *\n");
   printf("* 4. With Partner      *\n");
   printf("************************\n");
   printf("Choose From 1-4 :");
   scanf("%d" , &pref );
   switch(pref){
    case 1:
   printf("****************\n");
   printf("*Coorg         *\n");
   printf("*Munnar        *\n");
   printf("*Nainital      *\n");
   printf("*ooty          *\n");
   printf("*Rishikesh     *\n");
   printf("*Mussoorie     *\n");
   printf("*Gangtok       *\n");
   printf("*Alleppey      *\n");
   printf("*Jaisalmer     *\n");
   printf("*Jaipur        *\n");
   printf("*Banglore      *\n");
   printf("*Mumbai        *\n");
   printf("*Prem Mandir   *\n");
   printf("*Kajrana Mandir*\n");
   printf("****************\n");
   break;
   
   case 2:
   printf("****************\n");
   printf("Goa            *\n");
   printf("Taj Mahel      *\n");
   printf("Laal Kila      *\n");
   printf("Shimla         *\n");
   printf("Ice Land       *\n");
   printf("Pondicherry    *\n");
   printf("Italy          *\n");
   printf("Mussoorie      *\n");
   printf("Manali         *\n");
   printf("Ladakh         *\n");
   printf("Jim Corbett    *\n");
   printf("New York City  *\n");
   printf("Lakshadweep    *\n");
   printf("Andaman        *\n");
   printf("Thailand       *\n");
   printf("****************\n");
   break;

   case 3:
   printf("****************\n");
   printf("*Japan         *\n");
   printf("*Udaipur       *\n");
   printf("*Malaysia      *\n");
   printf("*Costa Rica    *\n");
   printf("*Australia     *\n");
   printf("*Singapore     *\n");
   printf("*Spain         *\n");
   printf("*Hampi         *\n");
   printf("*Amsterdam     *\n");
   printf("*Varanasi      *\n");
   printf("*Manali        *\n");
   printf("*Kasol         *\n");
   printf("*Varkala       *\n");
   printf("*Darjeeling    *\n");
   printf("*Varkala       *\n");
   printf("****************\n");
   break;

   case 4:
   printf("****************\n");
   printf("*Santoini      *\n");
   printf("*Lakshadweep   *\n");
   printf("*Gulmarg       *\n");
   printf("*Bora Bora     *\n");
   printf("*Cappadocia    *\n");
   printf("*Mauritius     *\n");
   printf("*Langkawi      *\n");
   printf("*Krabi         *\n");
   printf("*Kodaikanal    *\n");
   printf("*Seychelles    *\n");
   printf("*Big Sur       *\n");
   printf("*Bruges        *\n");
   printf("*Langkawi      *\n");
   printf("*Barbados      *\n");
   printf("*Germany       *\n");
   printf("*Buenos Aires  *\n");
   printf("*Bali          *\n");
   printf("*Bentota       *\n");
   printf("****************\n");
}

}

void display() 
{
    printf("Seat\tPassport\tName\t\t\tEmail\t\t\tDestination\n");
    for (int i = 0; i < MAX_SEATS; i++) 
    {
        if (passports[i][0] != '\0') {
            printf("A-%d\t%-6s\t\t%-15s\t\t%-15s\t\t%-15s\n", i + 1, passports[i], names[i], emails[i], destinations[i]);
        }
    }
}

void cancel() {
    char passport[6];
    printf("Enter passport number to delete record: ");
    scanf("%s", passport);

    for (int i = 0; i < MAX_SEATS; i++) 
    {
        if (strcmp(passports[i], passport) == 0) {
            passports[i][0] = '\0'; // Mark the seat as available
            num--;
            printf("Booking has been deleted.\n");
            return;
        }
    }

    printf("Passport number is incorrect. Please check your passport.\n");
}

