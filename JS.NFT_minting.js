/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let n = 1;
const NFT_cars = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (car_name, nfts_minted, s, hp, price, tkstd)
{
    const metadata = {"name":car_name,
                      "Nfts":nfts_minted,
                      "speed":s,
                      "Hrpower":hp,
                      "cost":price,
                      "Token std":tkstd};

    NFT_cars.push(metadata);
    console.log("NFT Minted " +n+" : "+car_name);
    n++;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs ()
{
    for(let i = 0; i < NFT_cars.length; i++)
    {
        console.log("\n");
        console.log("NFT Car name : \t"+NFT_cars[i].name);
        console.log("No. of NFTS Minted : \t"+NFT_cars[i].Nfts);
        console.log("Top Speed (in mph): \t"+NFT_cars[i].speed);
        console.log("Horsepower : \t"+NFT_cars[i].Hrpower);
        console.log("Current Price : \t"+NFT_cars[i].cost);
        console.log("Token Standard : \t"+NFT_cars[i]["Token std"]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply()
{
    console.log("\n");
    console.log("Total Number of NFTs Minted is : "+NFT_cars.length);
}

// call your functions below this line
mintNFT("Aston Martin Vulcan AMR Pro", 24, 211, 820, 250000, "ERC-721");
mintNFT("Bugatti Centodieci", 100, 236, 1600, 600000, "ERC-721");
mintNFT("Lamborghini Countach LPI 800-4", 112, 221, 819, 300000, "ERC-721");
mintNFT("Ferrari 296 GTB", 296, 205, 663, 200000, "ERC-721");
mintNFT("Mercedes-Benz G-Class AMG", 100, 140, 6630, 200000, "ERC-721");
mintNFT("Koenigsegg Jesko", 125, 278, 1600, 300000, "ERC-721");

listNFTs();

getTotalSupply();
