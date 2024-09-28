#include <iostream>
#include <string>
using namespace std;
int main() {
    string input;
    getline(std::cin, input);
    cout << "{\"text\": \"Hello from C++\"}" << std::endl;
    return 0;
}
