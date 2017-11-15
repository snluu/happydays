#include <node.h>
#include <stdio.h>
#include <ctime>

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;
using namespace std;

void hello(const FunctionCallbackInfo<Value>& args) {
  char message[100];
  sprintf(message, "Hello from CPP! It is now %I64d", time(nullptr));

  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(
      isolate, message));
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "hello", hello);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, init)

}  // namespace demo