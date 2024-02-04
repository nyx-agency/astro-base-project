aws configure:
aws configure sso --profile bypablo

SSO session name (Recommended): bypablo
SSO start URL [None]: https://bypablo.awsapps.com/start/
SSO region [None]: sa-east-1
CLI default client Region [None]: sa-east-1
CLI default output format [None]: json

FUNCTION_ARN=$(aws lambda get-function --function-name hi --region sa-east-1 --profile bypablo --query 'Configuration.FunctionArn' --output text)
echo "ARN de la función Lambda: $FUNCTION_ARN"
