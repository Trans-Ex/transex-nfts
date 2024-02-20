import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Trans.Ex";
  export const SYMBOL: string = "TRSX";
  export const MINT_PRICE: u64 = 8900000000;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 111;
  export const URI: string = "https://salmon-negative-koi-521.mypinata.cloud/ipfs/QmbnEz26G1Bstha3LiBfxC8cu6UH7XEGQVsXz85zAJFwCC";
  export const OWNER: Uint8Array = Base58.decode("14dpibwJrMJUDBMCPVrbGrz3P2iX52ecDh");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("14dpibwJrMJUDBMCPVrbGrz3P2iX52ecDh");
}