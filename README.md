import random
import time
import sys

def print_slow(str):
    for letter in str:
        sys.stdout.write(letter)
        sys.stdout.flush()
        time.sleep(0.03)
    print()

def fake_hack():
    print_slow("Initializing virtual hacking simulation...")
    time.sleep(1)
    print_slow("Bypassing firewall...")
    
    for i in range(random.randint(3,7)):
        print(f"Attempt {i+1}: {random.randint(10,90)}%")
        time.sleep(0.5)
    
    print_slow("Firewall bypassed!")
    time.sleep(1)
    print_slow("Accessing mainframe...")
    
    for i in range(5):
        print(f"Decrypting layer {i+1}...")
        time.sleep(0.7)
    
    print_slow("Mainframe accessed!")
    time.sleep(1)
    print_slow("Extracting data...")
    
    for i in range(100):
        print(f"Downloading data: {i+1}%", end='\r')
        time.sleep(0.05)
    
    print("\nData extraction complete!")
    time.sleep(1)
    print_slow("Covering tracks...")
    time.sleep(2)
    print_slow("\n=== HACK SIMULATION COMPLETE ===")
    print_slow("This was just a simulation for educational purposes.")
    print_slow("Unauthorized access to computer systems is illegal.")

if __name__ == "__main__":
    print("=== VIRTUAL HACK SIMULATOR ===")
    print("This is a fake hacking simulation for educational purposes only.")
    print("Real hacking without permission is illegal and unethical.\n")
    
    input("Press Enter to begin simulation...")
    fake_hack()
