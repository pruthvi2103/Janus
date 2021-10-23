package utils

import (
	"math/rand"
	"time"
)
  
  const charset = "abcdefghijklmnopqrstuvwxyz" +
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  
  var seededRand *rand.Rand = rand.New(
    rand.NewSource(time.Now().UnixNano()))
  
  func StringWithCharset(length int, charset string) string {
    b := make([]byte, length)
    for i := range b {
      b[i] = charset[seededRand.Intn(len(charset))]
    }
    return string(b)
  }
  
  func String(length int) string {
    return StringWithCharset(length, charset)
  }
  func RandomNumber(length int)int{
      return seededRand.Intn(length)
  }
  func RandomNumberWithLimit(floor int,ceiling int) int  {
      return ((RandomNumber(ceiling - floor + 1))+floor)
  }



