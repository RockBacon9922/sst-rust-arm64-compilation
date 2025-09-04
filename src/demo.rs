use cargo_lambda_macro::lambda_function;
use lambda_runtime::{Error, LambdaEvent};
use serde_json::Value;

#[lambda_function]
async fn func(_event: LambdaEvent<Value>) -> Result<Value, Error> {
    Ok(Value::String("Hello, world!".to_string()))
}
